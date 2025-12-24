import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Solar Park EPC',
    capacity: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: 'Solar Park EPC',
      capacity: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@company.com"
            className="mt-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 99999 99999"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="mt-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="projectType">Project Type *</Label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="mt-2 w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
          >
            <option value="Solar Park EPC">Solar Park EPC</option>
            <option value="Rooftop Solar EPC">Rooftop Solar EPC</option>
            <option value="Solar Finance">Solar Finance & Investment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <Label htmlFor="capacity">Expected Capacity (MW)</Label>
          <Input
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="e.g., 5 MW"
            className="mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project requirements..."
          rows={5}
          className="mt-2"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#a3e635] text-[#1a2332] hover:bg-[#84cc16] font-semibold text-lg py-6"
      >
        Submit Inquiry
      </Button>
    </form>
  );
};