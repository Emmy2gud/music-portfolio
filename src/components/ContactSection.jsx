import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTwitter, FaSoundcloud } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { icon: <FaWhatsapp className="text-2xl" />, url: '#', label: 'WhatsApp' },
    { icon: <FaEnvelope className="text-2xl" />, url: '#', label: 'Email' },
    { icon: <FaInstagram className="text-2xl" />, url: '#', label: 'Instagram' },
    { icon: <FaTwitter className="text-2xl" />, url: '#', label: 'Twitter' },
    { icon: <FaSoundcloud className="text-2xl" />, url: '#', label: 'SoundCloud' }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-dark to-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to create something amazing? Reach out for bookings, collaborations, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full glass-effect neon-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full glass-effect neon-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full glass-effect neon-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full glass-effect neon-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full glass-effect neon-border py-3 rounded-lg font-medium hover:bg-accent/20 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="glass-effect rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-lg font-bold mb-2">Booking & Inquiries</h4>
                  <p className="text-gray-400">For all business inquiries, collaborations, and bookings:</p>
                  <a href="mailto:booking@crispinbeatz.com" className="text-accent hover:underline block mt-2">
                    booking@crispinbeatz.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">Management</h4>
                  <p className="text-gray-400">Represented by Elite Music Group</p>
                  <a href="mailto:management@crispinbeatz.com" className="text-accent hover:underline block mt-2">
                    management@crispinbeatz.com
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      className="glass-effect neon-border w-14 h-14 rounded-full flex items-center justify-center hover:bg-accent/20 transition-all"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-800">
                <h4 className="text-lg font-bold mb-2">Direct Line</h4>
                <a href="https://wa.me/1234567890" className="text-accent hover:underline flex items-center">
                  <FaWhatsapp className="mr-2" />
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;