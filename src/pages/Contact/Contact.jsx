import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Main contact information
  const contactInfo = {
    address: "J.K Tower (3rd Floor) K. C Dey Road, Chattogram",
    phone: "01407-0471001",
    email: "info@rajasthanfamily.co",
    hours: "Sat - Thu: 9:00 AM - 8:00 PM"
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-2">Get in touch with our team</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Our Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-800">Address</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-1 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-1 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Store Locations */}
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Our Store Locations</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Paramount City, Reazuddin Bazar",
                  "KBH Plaza, Nasirabad",
                  "Chottol Shopping, Teri Bazer",
                  "Western Plaza, Chakaria",
                  "Chittagong Shopping Complex, Sholashohor",
                  "Porbartok Circle, Panchlaish",
                  "Star Super Market, Lohagara",
                  "Nahar Plaza, Hathazari",
                  "Agrabad Center, Aktaruzzaman Center",
                  "Pan Bazer Road, Cox Bazar"
                ].map((location, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                    <p className="text-gray-600">{location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;