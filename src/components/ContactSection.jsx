import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTwitter, FaSoundcloud } from 'react-icons/fa';

const ContactSection = () => {
      const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    // Simulate form submission (in a real app, you would send this to a service like Formspree)
    try {
  event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "38ae96c9-4ab7-4a92-a9c3-6baea77395d4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    } catch {
      setSubmitStatus('error');
  
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <FaWhatsapp className="text-2xl" />, url: 'https://wa.me/1234567890', label: 'WhatsApp' },
    { icon: <FaEnvelope className="text-2xl" />, url: 'mailto:emmanwabugo148@gmail.com', label: 'Email' },
    { icon: <FaInstagram className="text-2xl" />, url: 'https://instagram.com/crispinbeatz', label: 'Instagram' },

  ];

  return (
    <section className="section-padding bg-gradient-to-b from-dark to-secondary" id="contact">
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
                <label htmlFor="project" className="block text-gray-400 mb-2">Project/Song</label>
                <input
                  type="text"
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full glass-effect neon-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="What project is this for?"
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
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full glass-effect neon-border py-3 rounded-lg font-medium hover:bg-accent/20 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-900/30 border border-green-500/50 rounded-lg text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400 text-center">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
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
                  <a href="mailto:emmanwabugo148@gmail.com" className="text-accent hover:underline block mt-2">
                    emmanwabugo148@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">Management</h4>
                  <p className="text-gray-400">Represented by Elite Music Group</p>
                  <a href="mailto:Theswisscartel@gmail.com" className="text-accent hover:underline block mt-2">
                   Theswisscartel@gmail.com
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
                      target="_blank"
                      rel="noopener noreferrer"
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