'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { formatDate } from '@/lib/utils';
import { Mail, FileText, CheckCircle, Clock } from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

export const ContactSubmissionsAdmin = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      let query = supabase.from('contact_submissions').select('*').order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;
      if (error) throw error;
      setSubmissions(data as ContactSubmission[]);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase.from('contact_submissions').update({ status: newStatus }).eq('id', id);

      if (error) throw error;
      fetchSubmissions();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (loading) return <div className="p-4">Loading submissions...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Contact Submissions</h2>

      {/* Filter */}
      <div className="mb-6 flex gap-2">
        {['all', 'new', 'read', 'responded'].map((status) => (
          <button
            key={status}
            onClick={() => {
              setFilter(status);
              setLoading(true);
            }}
            className={`px-4 py-2 rounded capitalize ${
              filter === status ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Submissions Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{formatDate(submission.created_at)}</td>
                <td className="p-3">{submission.name}</td>
                <td className="p-3">{submission.email}</td>
                <td className="p-3 max-w-xs truncate">{submission.subject}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    submission.status === 'new' ? 'bg-blue-100 text-blue-800' :
                    submission.status === 'read' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {submission.status}
                  </span>
                </td>
                <td className="p-3">
                  <select
                    value={submission.status}
                    onChange={(e) => updateStatus(submission.id, e.target.value)}
                    className="border rounded px-2 py-1 text-xs"
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="responded">Responded</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {submissions.length === 0 && <p className="text-gray-500 mt-4">No submissions found</p>}
    </div>
  );
};
