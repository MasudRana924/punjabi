import { Shirt, Users, Sparkles, MapPin, Clock, Phone, Star } from 'lucide-react';

const Showroom = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Store Info */}
      <div className="relative overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Punjabi fashion store interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Store Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  Premium Punjabi Fashion Destination
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Visit Our
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Flagship </span>
                  Store
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Experience the finest collection of traditional Punjabi attire with modern sophistication in our heritage showroom.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Store Location</h3>
                    <p className="text-blue-100">123 Fashion Street, Heritage District, Punjab, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Opening Hours</h3>
                    <div className="text-blue-100 space-y-1">
                      <div>Monday - Friday: 10:00 AM - 9:00 PM</div>
                      <div>Saturday: 10:00 AM - 10:00 PM</div>
                      <div>Sunday: 12:00 PM - 8:00 PM</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Contact Us</h3>
                    <p className="text-blue-100">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Punjabi Dress Store Interior" 
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 ring-1 ring-white/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Gallery Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Store <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our beautifully designed showroom featuring the latest in Punjabi fashion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80" 
              alt="Traditional Punjabi Suits Display" 
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">Traditional Collection</h3>
              <p className="text-sm opacity-90">Authentic Punjabi suits with heritage designs</p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1595341595379-cf0f2a7d3bea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Embroidered Punjabi Collection" 
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">Embroidered Elegance</h3>
              <p className="text-sm opacity-90">Intricate embroidery and premium fabrics</p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Designer Punjabi Boutique" 
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">Designer Boutique</h3>
              <p className="text-sm opacity-90">Contemporary designs with traditional roots</p>
            </div>
          </div>
        </div>
      </div>

      {/* Store Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Store</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience unmatched quality and service with our exclusive offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Custom Tailoring */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shirt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Tailoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Perfect fit guaranteed with our expert tailoring services for all Punjabi dress styles. Our master craftsmen ensure every piece fits like it was made just for you.
              </p>
            </div>
            
            {/* Personal Styling */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Styling</h3>
              <p className="text-gray-600 leading-relaxed">
                Our fashion consultants help you choose the perfect Punjabi outfit for any occasion. From weddings to festivals, we'll make you look stunning.
              </p>
            </div>
            
            {/* Premium Embroidery */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Embroidery</h3>
              <p className="text-gray-600 leading-relaxed">
                Exquisite hand-embroidered designs and premium fabric collections available. Each piece is a work of art that celebrates traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Find Us Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Find <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Store</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Punjab's fashion district, we're easy to find and always ready to welcome you
          </p>
        </div>
        
        <div className="relative w-full h-96 lg:h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4729447579995!2d75.8569722147809!3d30.706217395463447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feca8d9d2b0a9%3A0x21356fdd7cb5b6e7!2sFashion%20Street%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl"
          ></iframe>
          <div className="absolute inset-0 ring-1 ring-gray-200 rounded-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Showroom;