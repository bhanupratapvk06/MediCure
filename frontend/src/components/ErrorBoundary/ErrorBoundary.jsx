import React, { Component } from 'react';
import Button from '../ui/Button';

class ErrorBoundaryClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      // In production, show a user-friendly message
      // In development, show the error details
      const isDev = import.meta.env.DEV;

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            padding: '2rem',
            textAlign: 'center',
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '0.5rem',
            margin: '1rem',
          }}
        >
          <div
            style={{
              fontSize: '3rem',
              marginBottom: '1rem',
            }}
            role="img"
            aria-label="Error"
          >
            ⚠️
          </div>

          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#991b1b',
              marginBottom: '0.5rem',
            }}
          >
            Something went wrong
          </h2>

          <p
            style={{
              color: '#7f1d1d',
              marginBottom: '1.5rem',
              maxWidth: '500px',
            }}
          >
            We apologize for the inconvenience. An error occurred while loading this page.
          </p>

          <Button onClick={this.handleReset} variant="primary">
            Try Again
          </Button>

          {isDev && this.state.error && (
            <div
              style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: '#1e293b',
                color: '#e2e8f0',
                borderRadius: '0.5rem',
                textAlign: 'left',
                maxWidth: '800px',
                width: '100%',
                overflow: 'auto',
                fontSize: '0.875rem',
              }}
            >
              <details style={{ whiteSpace: 'pre-wrap' }}>
                <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                  Error Details (Development Only)
                </summary>
                <strong>{this.state.error.toString()}</strong>
                {this.state.errorInfo.componentStack && (
                  <div style={{ marginTop: '1rem' }}>
                    Component Stack:
                    {this.state.errorInfo.componentStack}
                  </div>
                )}
              </details>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorBoundary = (props) => {

  return <ErrorBoundaryClass {...props} />;
};

export default ErrorBoundary;
