import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 80,100 0,100" fill="currentColor" opacity="0.1"/>
            <polygon points="20,0 100,0 100,100 60,100" fill="currentColor" opacity="0.05"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 py-12 px-4">
        {/* Corporate Office Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <MapPin className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 tracking-wide">
            CORPORATE OFFICE: J.K TOWER (3RD FLOOR) K. C DEY ROAD, CHATTOGRAM.
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>Email: info@rajasthanfamily.co</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>Hotline: 01407-0471001</span>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Row 1 */}
          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-bold text-lg mb-1">PARAMOUNT CITY</h4>
            <p className="text-gray-300">REAZUDDIN BAZAR</p>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-bold text-lg mb-1">KBH PLAZA</h4>
            <p className="text-gray-300">NASIRABAD</p>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-bold text-lg mb-1">CHOTTOL SHOPPING</h4>
            <p className="text-gray-300">TERI BAZER</p>
          </div>

          {/* Row 2 */}
          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-bold text-lg mb-1">WESTERN PLAZA</h4>
            <p className="text-gray-300">CHAKARIA</p>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-bold text-lg mb-1">CHITTAGONG</h4>
            <h4 className="font-bold text-lg mb-1">SHOPPING COMPLEX</h4>
            <p className="text-gray-300">SHOLASHOHOR</p>
          </div>

          {/* Row 3 */}
          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-bold text-lg mb-1">PORBARTOK CIRCLE</h4>
            <p className="text-gray-300">PANCHLAISH</p>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-bold text-lg mb-1">STAR SUPER MARKET</h4>
            <p className="text-gray-300">LOHAGARA</p>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-bold text-lg mb-1">NAHAR PLAZA</h4>
            <p className="text-gray-300">HATHAZARI</p>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-bold text-lg mb-1">AGRABAD, BESIDE</h4>
            <p className="text-gray-300">AKTARUZZAMAN CENTER</p>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-bold text-lg mb-1">PAN BAZER ROAD</h4>
            <p className="text-gray-300">COX BAZAR</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400">
            <span>Copyright © 2022</span>
            <span>All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;