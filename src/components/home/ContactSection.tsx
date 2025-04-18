'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors } 
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us today.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                {...register('company')}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-primary text-text-white rounded-lg font-medium w-full 
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary/90'} 
                  transition-colors duration-200 cursor-pointer`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {submitStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg text-center">
              Thank you for your message! We&apos;ll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg text-center">
              There was an error sending your message. Please try again later.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

