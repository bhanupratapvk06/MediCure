import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import FormField from '../components/ui/FormField';
import Select from '../components/ui/Select';
import Alert from '../components/ui/Alert';
import { useTheme } from '../theme';
import { rareInjectionSchema, validateForm } from '../utils/validation';
import axios from '../utils/axios';

const RequestRareInjection = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    urgency: 'Low',
    location: '',
    contact: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
    setApiError('');
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    // Validate on blur
    validateField(field);
  };

  const validateField = async (field) => {
    // For select fields, validation is simple
    if (field === 'urgency') {
      const valid = ['Low', 'Medium', 'High'].includes(formData.urgency);
      if (!valid) {
        setErrors((prev) => ({
          ...prev,
          urgency: 'Please select a valid urgency level',
        }));
        return false;
      }
      return true;
    }

    const result = await validateForm(
      rareInjectionSchema.pick([field]),
      { [field]: formData[field] }
    );
    if (!result.valid) {
      setErrors((prev) => ({ ...prev, [field]: result.errors[field] }));
      return false;
    }
    return true;
  };

  const validateFormOnSubmit = async () => {
    const result = await validateForm(rareInjectionSchema, formData);
    setErrors(result.errors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
    return result.valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    const isValid = await validateFormOnSubmit();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post('/rareInjection', {
        ...formData,
        quantity: Number(formData.quantity),
      });

      if (response.status === 201) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          quantity: '',
          urgency: 'Low',
          location: '',
          contact: '',
        });
        setTouched({});

        // Redirect after showing success message
        setTimeout(() => {
          navigate('/rare-injections');
        }, 2000);
      }
    } catch (error) {
      setIsSubmitting(false);
      const message =
        error.response?.data?.message ||
        error.message ||
        'Error submitting request. Please try again.';
      setApiError(message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fafafa] font-['Inter',sans-serif]">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <NavBar />

      <main id="main-content" className="min-w-6xl mx-auto mb-20 mt-20 flex-1">
        <div className="bg-white p-8 rounded-lg shadow shadow-blue-50 border border-primary-100 max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold text-black mb-6">
            Request a Rare Injection
          </h1>

          {apiError && (
            <Alert
              type="error"
              dismissible
              onDismiss={() => setApiError('')}
              style={{ marginBottom: '1.5rem' }}
            >
              {apiError}
            </Alert>
          )}

          {submitSuccess && (
            <Alert
              type="success"
              dismissible
              onDismiss={() => setSubmitSuccess(false)}
              style={{ marginBottom: '1.5rem' }}
            >
              Request submitted successfully! Redirecting to your requests...
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <FormField
              name="name"
              label="Injection Name"
              value={formData.name}
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              error={touched.name ? errors.name : ''}
              placeholder="Enter the name of the injection"
              required
            />

            <FormField
              name="quantity"
              label="Quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange('quantity')}
              onBlur={handleBlur('quantity')}
              error={touched.quantity ? errors.quantity : ''}
              placeholder="Enter the required quantity"
              required
            />

            <FormField
              name="urgency"
              label="Urgency Level"
              value={formData.urgency}
              onChange={handleChange('urgency')}
              onBlur={handleBlur('urgency')}
              error={touched.urgency ? errors.urgency : ''}
              required
            >
              <Select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange('urgency')}
                onBlur={handleBlur('urgency')}
                disabled={isSubmitting}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Select>
            </FormField>

            <FormField
              name="location"
              label="Location"
              value={formData.location}
              onChange={handleChange('location')}
              onBlur={handleBlur('location')}
              error={touched.location ? errors.location : ''}
              placeholder="Enter your location"
              required
            />

            <FormField
              name="contact"
              label="Contact Information"
              value={formData.contact}
              onChange={handleChange('contact')}
              onBlur={handleBlur('contact')}
              error={touched.contact ? errors.contact : ''}
              placeholder="Enter your contact details"
              required
            />

            <div className="flex items-center justify-between gap-4 mt-6">
              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/rare-injections')}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestRareInjection;
