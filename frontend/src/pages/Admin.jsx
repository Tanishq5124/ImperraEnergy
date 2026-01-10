import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { RefreshCw, Mail, Phone, Building2, Calendar, Tag } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Admin = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchInquiries();
  }, [filter]);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const url = filter === 'all' 
        ? `${BACKEND_URL}/api/contact-inquiries`
        : `${BACKEND_URL}/api/contact-inquiries?status=${filter}`;
      
      const response = await axios.get(url);
      setInquiries(response.data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    const colors = {
      new: 'bg-green-100 text-green-800 border-green-300',
      contacted: 'bg-blue-100 text-blue-800 border-blue-300',
      converted: 'bg-purple-100 text-purple-800 border-purple-300'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1a2332] mb-2">Contact Inquiries Admin</h1>
          <p className="text-gray-600">Manage and view all contact form submissions</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-[#192B43] text-white' : ''}
          >
            All ({inquiries.length})
          </Button>
          <Button
            variant={filter === 'new' ? 'default' : 'outline'}
            onClick={() => setFilter('new')}
            className={filter === 'new' ? 'bg-green-600 text-white hover:bg-green-700' : ''}
          >
            New
          </Button>
          <Button
            variant={filter === 'contacted' ? 'default' : 'outline'}
            onClick={() => setFilter('contacted')}
            className={filter === 'contacted' ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
          >
            Contacted
          </Button>
          <Button
            variant={filter === 'converted' ? 'default' : 'outline'}
            onClick={() => setFilter('converted')}
            className={filter === 'converted' ? 'bg-purple-600 text-white hover:bg-purple-700' : ''}
          >
            Converted
          </Button>
          <Button
            variant="outline"
            onClick={fetchInquiries}
            className="ml-auto"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading inquiries...</p>
          </div>
        ) : inquiries.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-gray-600 text-lg">No inquiries found</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <Card key={inquiry.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#1a2332] mb-1">{inquiry.name}</h3>
                      {inquiry.company && (
                        <p className="text-gray-600 flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          {inquiry.company}
                        </p>
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(inquiry.status)}`}>
                      {inquiry.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-4 h-4 text-[#a3e635]" />
                      <a href={`mailto:${inquiry.email}`} className="hover:text-[#a3e635]">
                        {inquiry.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-[#a3e635]" />
                      <a href={`tel:${inquiry.phone}`} className="hover:text-[#a3e635]">
                        {inquiry.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Tag className="w-4 h-4 text-[#a3e635]" />
                      {inquiry.projectType}
                    </div>
                    {inquiry.capacity && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="font-semibold">Capacity:</span>
                        {inquiry.capacity}
                      </div>
                    )}
                  </div>

                  {inquiry.message && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Message:</p>
                      <p className="text-gray-700">{inquiry.message}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(inquiry.timestamp)}
                    </div>
                    <div className="text-xs text-gray-400">
                      ID: {inquiry.id.substring(0, 8)}...
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
