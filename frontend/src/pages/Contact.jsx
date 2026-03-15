import React, { useState } from 'react';
import { IoMailOutline, IoCallOutline, IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import { MdSend } from 'react-icons/md';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Button from '../components/ui/Button';
import FormField from '../components/ui/FormField';
import Alert from '../components/ui/Alert';
import { contactFormSchema, validateForm } from '../utils/validation';

const contactInfo = [
  {
    icon: <IoMailOutline className="text-xl" />,
    label: "Email",
    value: "contact@medicure.com",
    href: "mailto:contact@medicure.com",
  },
  {
    icon: <IoCallOutline className="text-xl" />,
    label: "Phone",
    value: "+91 98263 89201",
    href: "tel:+919826389201",
  },
  {
    icon: <IoLocationOutline className="text-xl" />,
    label: "Address",
    value: "123 Medicure Street, Wellness City",
    href: null,
  },
  {
    icon: <IoTimeOutline className="text-xl" />,
    label: "Working Hours",
    value: "24/7 Emergency Support",
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleBlur = async (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const result = await validateForm(contactFormSchema.pick([field]), {
      [field]: formData[field],
    });
    if (!result.valid) {
      setErrors((prev) => ({ ...prev, [field]: result.errors[field] }));
    }
  };

  const validateFormOnSubmit = async () => {
    const result = await validateForm(contactFormSchema, formData);
    setErrors(result.errors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
    return result.valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateFormOnSubmit();
    if (!isValid) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTouched({});
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-['Inter',sans-serif]">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <NavBar />

      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-teal-600" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get in <span className="text-gradient-white">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our
            services or need emergency assistance, we're here to help.
          </p>
        </div>
      </section>

      <main id="main-content" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500">
                  <MdSend className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">
                  Send Us a Message
                </h2>
              </div>

              {submitSuccess && (
                <Alert
                  type="success"
                  dismissible
                  onDismiss={() => setSubmitSuccess(false)}
                  style={{ marginBottom: '1.5rem' }}
                >
                  Your message has been sent successfully! We'll get back to you soon.
                </Alert>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <FormField
                  name="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange('name')}
                  onBlur={() => handleBlur('name')}
                  error={touched.name ? errors.name : ''}
                  placeholder="Enter your name"
                  required
                />

                <FormField
                  name="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  onBlur={() => handleBlur('email')}
                  error={touched.email ? errors.email : ''}
                  placeholder="Enter your email"
                  required
                />

                <FormField
                  name="message"
                  label="Message"
                  as="textarea"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange('message')}
                  onBlur={() => handleBlur('message')}
                  error={touched.message ? errors.message : ''}
                  placeholder="Write your message here..."
                  required
                />

                <Button
                  type="submit"
                  fullWidth
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Contact Information
            </h2>

            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-neutral-100 p-5 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-50 to-teal-50 flex items-center justify-center text-primary-500">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-neutral-800 font-medium hover:text-primary-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-neutral-800 font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Map Card */}
            <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-xl border border-neutral-100 p-5 mt-6">
              <div className="flex items-center gap-3 mb-3">
                <IoLocationOutline className="text-xl text-primary-500" />
                <span className="font-semibold text-neutral-800">Find Us</span>
              </div>
              <div className="bg-white rounded-lg h-40 flex items-center justify-center border border-neutral-100">
                <div className="text-center">
                  <IoLocationOutline className="text-3xl text-primary-300 mx-auto mb-2" />
                  <p className="text-sm text-neutral-400">123 Medicure Street</p>
                  <p className="text-sm text-neutral-400">Wellness City, HC 45678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
