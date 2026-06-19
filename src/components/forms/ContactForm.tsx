'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validators';
import { Mail, AlertCircle, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
      {submitted && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex gap-3">
          <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
          <div>
            <p className="font-semibold text-green-900 dark:text-green-100">Message sent successfully!</p>
            <p className="text-sm text-green-800 dark:text-green-200">We'll get back to you soon.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex gap-3">
          <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-text-dark dark:text-soft-white mb-2">Name</label>
        <input
          {...register('name')}
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-forest-green dark:focus:border-growth-green outline-none transition-colors"
        />
        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-text-dark dark:text-soft-white mb-2">Email</label>
        <input
          {...register('email')}
          type="email"
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-forest-green dark:focus:border-growth-green outline-none transition-colors"
        />
        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-text-dark dark:text-soft-white mb-2">Subject</label>
        <input
          {...register('subject')}
          type="text"
          placeholder="What is this about?"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-forest-green dark:focus:border-growth-green outline-none transition-colors"
        />
        {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-text-dark dark:text-soft-white mb-2">Message</label>
        <textarea
          {...register('message')}
          placeholder="Your message here..."
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-forest-green dark:focus:border-growth-green outline-none transition-colors resize-none"
        />
        {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 bg-forest-green hover:bg-growth-green text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Mail size={18} />
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};
