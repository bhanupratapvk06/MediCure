import axios from 'axios';

// Create axios instance with configuration
const instance = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:5001/api/' : '/api/',
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add auth headers if available
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Adjust based on your auth method
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors globally
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;

    // If no response, it's a network error or timeout
    if (!response) {
      console.error('Network error or timeout:', error.message);
      return Promise.reject({
        ...error,
        message: 'Network error. Please check your connection and try again.',
      });
    }

    // Handle 401 Unauthorized - could trigger logout or token refresh
    if (response.status === 401) {
      // Clear auth state and redirect to login if needed
      localStorage.removeItem('token');
      window.location.href = '/login'; // Adjust to your login route
      return Promise.reject(error);
    }

    // Handle 403 Forbidden
    if (response.status === 403) {
      return Promise.reject({
        ...error,
        message: 'Access denied. You do not have permission to perform this action.',
      });
    }

    // Handle 404 Not Found
    if (response.status === 404) {
      return Promise.reject({
        ...error,
        message: 'The requested resource was not found.',
      });
    }

    // Handle 500+ server errors with retry logic
    if (response.status >= 500 && config && !config._retry) {
      config._retry = true;

      // Exponential backoff retry
      const retryDelay = Math.min(1000 * 2 ** (config._retryCount || 0), 10000);
      await new Promise((resolve) => setTimeout(resolve, retryDelay));

      return instance(config);
    }

    // Return original error for other cases
    return Promise.reject(error);
  }
);

export default instance;
