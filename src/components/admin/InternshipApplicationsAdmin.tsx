'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { formatDate } from '@/lib/utils';

interface InternshipApplication {
  id: string;
  name: string;
  email: string;
  country: string;
  position: string;
  status: string;
  resume_url: string | null;
  created_at: string;
}

export const InternshipApplicationsAdmin = () => {
  const [applications, setApplications] = useState<InternshipApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      let query = supabase.from('internship_applications').select('*').order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;
      if (error) throw error;
      setApplications(data as InternshipApplication[]);
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase.from('internship_applications').update({ status: newStatus }).eq('id', id);

      if (error) throw error;
      fetchApplications();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (loading) return <div className="p-4">Loading applications...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Internship Applications</h2>

      {/* Filter */}
      <div className="mb-6 flex gap-2">
        {['all', 'pending', 'reviewed', 'accepted', 'rejected'].map((status) => (
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

      {/* Applications Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">Position</th>
              <th className="p-3 text-left">Resume</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{formatDate(app.created_at)}</td>
                <td className="p-3">{app.name}</td>
                <td className="p-3">{app.email}</td>
                <td className="p-3">{app.country}</td>
                <td className="p-3">{app.position}</td>
                <td className="p-3">
                  {app.resume_url ? (
                    <a href={app.resume_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View
                    </a>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    app.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                    app.status === 'accepted' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {app.status}
                  </span>
                </td>
                <td className="p-3">
                  <select
                    value={app.status}
                    onChange={(e) => updateStatus(app.id, e.target.value)}
                    className="border rounded px-2 py-1 text-xs"
                  >
                    <option value="pending">Pending</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {applications.length === 0 && <p className="text-gray-500 mt-4">No applications found</p>}
    </div>
  );
};
