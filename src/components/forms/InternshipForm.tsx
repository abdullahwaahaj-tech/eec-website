'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { internshipSchema, type InternshipFormData } from '@/lib/validators';
import { AlertCircle, CheckCircle, Upload } from 'lucide-react';

export const InternshipForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InternshipFormData>({
    resolver: zodResolver(internshipSchema),
  });

  const onSubmit = async (data: InternshipFormData) => {
    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('country', data.country);
      formData.append('education', data.education);
      formData.append('position', data.position);
      formData.append('motivation', data.motivation);

      // Add file if selected
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput?.files?.[0]) {
        formData.append('resume', fileInput.files[0]);
      }

      const response = await fetch('/api/internships', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setSubmitted(true);
      reset();
      setFileName('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit application. Please try again.');
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
            <p className="font-semibold text-green-900 dark:text-green-100">Application submitted successfully!</p>
            <p className="text-sm text-green-800 dark:text-green-200">We'll review your application and be in touch soon.</p>
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
        <label className="block text-sm font-medium text-text-dark dark:text-soft-white mb-2">Full Name</label>
        <input
          {...register('name')}
          type="text"
          placeholder="Your full name"
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

      {/* Grid Layout for Country, Education, Position */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-text-dark dark:text-soft-white mb-2">Country</label>
          <input
            {...register('country')}
            type="text"
            placeholder="Your country"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-forest-green dark:focus:border-growth-green outline-none transition-colors"
          />
          {errors.country && <p className="text-sm text-red-500 mt-1">{errors.country.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text-dark dark:text-soft-white mb-2">Education Level</label>
          <input
            {...register('education')}
            type="text"
            placeholder="e.g., Bachelor's in Environmental Science"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-forest-green dark:focus:border-growth-green outline-none transition-colors"
          />
          {errors.education && <p className="text-sm text-red-500 mt-1">{errors.education.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text-dark dark:text-soft-white mb-2">Position Interested In</label>
          <input
            {...register('position')}
            type="text"
            placeholder="e.g., Environmental Intern"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-forest-green dark:focus:border-growth-green outline-none transition-colors"
          />
          {errors.position && <p className="text-sm text-red-500 mt-1">{errors.position.message}</p>}
        </div>
      </div>

      {/* Motivation */}
      <div>
        <label className="block text-sm font-medium text-text-dark dark:text-soft-white mb-2">Why are you interested in EEC?</label>
        <textarea
          {...register('motivation')}
          placeholder="Tell us about your passion for environmental protection and community development..."
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-forest-green dark:focus:border-growth-green outline-none transition-colors resize-none"
        />
        {errors.motivation && <p className="text-sm text-red-500 mt-1">{errors.motivation.message}</p>}
      </div>

      {/* Resume Upload */}
      <div>
        <label className="block text-sm font-medium text-text-dark dark:text-soft-white mb-2">Resume / CV (Optional)</label>
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center cursor-pointer hover:border-forest-green dark:hover:border-growth-green transition-colors">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
            className="hidden"
            id="resume"
          />
          <label htmlFor="resume" className="cursor-pointer">
            <Upload className="mx-auto mb-2 text-gray-400" size={24} />
            <p className="text-sm font-medium text-text-dark dark:text-soft-white">Click to upload resume</p>
            <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
            {fileName && <p className="text-sm text-forest-green mt-2">{fileName}</p>}
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 bg-forest-green hover:bg-growth-green text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting Application...' : 'Submit Application'}
      </button>
    </form>
  );
};
