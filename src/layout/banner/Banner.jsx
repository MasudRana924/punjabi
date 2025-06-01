import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Complete slides data with all required properties
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      title: "SUMMER",
      subtitle: "COLLECTION 2024",
      description: "Discover our exclusive summer collection",
      subDescription: "Perfect for all occasions",
      additionalText: "Limited time offer",
      prizeText: "UP TO 30% OFF",
      familyImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      prizes: [
        { type: "Shirt", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" },
        { type: "Pants", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" },
        { type: "Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" }
      ]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      title: "WINTER",
      subtitle: "COLLECTION 2024",
      description: "Warm and stylish winter outfits",
      subDescription: "Stay cozy in style",
      additionalText: "New arrivals",
      prizeText: "UP TO 25% OFF",
      familyImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      prizes: [
        { type: "Jacket", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" },
        { type: "Sweater", image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" },
        { type: "Boots", image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" }
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      title: "SPRING",
      subtitle: "COLLECTION 2024",
      description: "Fresh looks for the new season",
      subDescription: "Light and comfortable",
      additionalText: "Special edition",
      prizeText: "UP TO 20% OFF",
      familyImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      prizes: [
        { type: "Dress", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" },
        { type: "Shirt", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" },
        { type: "Hat", image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center"
        style={{ backgroundImage: `url(${currentSlideData.image})` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute top-32 right-40 w-20 h-20 bg-white bg-opacity-15 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="text-center lg:text-left space-y-4 lg:space-y-6">
              {/* Logo */}
              <div className="mb-6 lg:mb-8">
                <div className="text-amber-700 text-2xl md:text-3xl font-bold">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto lg:mx-0 mb-2 bg-amber-700 bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-amber-700 text-xs md:text-sm">LOGO</span>
                  </div>
                  RAJASTHAN
                  <div className="text-sm md:text-base opacity-80">PANJABI & SHERWANI</div>
                </div>
              </div>

              {/* Main Title */}
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-amber-600 leading-none">
                  {currentSlideData.title}
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 tracking-wide">
                  {currentSlideData.subtitle}
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-2 text-white">
                <p className="text-lg md:text-xl font-medium">
                  {currentSlideData.description}
                </p>
                <p className="text-base md:text-lg">
                  {currentSlideData.subDescription}
                </p>
                <p className="text-base md:text-lg">
                  {currentSlideData.additionalText}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-red-600">
                  {currentSlideData.prizeText}
                </p>
              </div>
            </div>

            {/* Right Side - Family Image & Prizes */}
            <div className="relative flex flex-col items-center space-y-6">
              {/* Family Image */}
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img 
                  src={currentSlideData.familyImage}
                  alt="Happy Family"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>

              {/* Prize Items */}
              <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                {currentSlideData.prizes.map((prize, index) => (
                  <div 
                    key={index}
                    className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img 
                      src={prize.image}
                      alt={prize.type}
                      className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-amber-600 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;