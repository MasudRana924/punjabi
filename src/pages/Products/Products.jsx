import React, { useState, useEffect } from 'react';

const UniqueProductsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const products = [
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://img.freepik.com/free-vector/elegant-indian-man-culture_24908-80899.jpg?uid=R132334500&ga=GA1.1.78409749.1684004130&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/young-man-posing-casually-white-wall_1157-48198.jpg?uid=R132334500&ga=GA1.1.78409749.1684004130&semt=ais_hybrid&w=740',
    'https://images.othoba.com/images/thumbs/0686924_stylish-premium-punjabi.webp',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://mainsailorimagebucket.s3.ap-southeast-1.amazonaws.com/uploads/all/VrWGJ1z0rOiYAP84CRGOVTO41rXvXXIwFrCsQMPr.jpg',
    'https://images.othoba.com/images/thumbs/0686924_stylish-premium-punjabi.webp',
    'https://images.othoba.com/images/thumbs/0686924_stylish-premium-punjabi.webp'
  ];

  // Responsive grid sizes
  const getGridSize = (index) => {
    const { width } = windowSize;
    if (width < 640) {
      return 'col-span-12 row-span-2'; // Full width on mobile
    }
    if (width >= 640 && width < 1024) {
      const tabletSizes = [
        'col-span-6 row-span-2',
        'col-span-6 row-span-3',
        'col-span-6 row-span-2',
        'col-span-6 row-span-3',
        'col-span-6 row-span-2',
        'col-span-6 row-span-3',
        'col-span-6 row-span-2',
        'col-span-6 row-span-3',
        'col-span-6 row-span-2',
        'col-span-6 row-span-3',
        'col-span-6 row-span-2',
        'col-span-6 row-span-3'
      ];
      return tabletSizes[index % tabletSizes.length];
    }
    
    // Desktop sizes
    const desktopSizes = [
      'col-span-4 row-span-3', // Large square
      'col-span-3 row-span-2', // Medium rectangle
      'col-span-5 row-span-2', // Wide rectangle
      'col-span-3 row-span-4', // Tall rectangle
      'col-span-4 row-span-2', // Medium square
      'col-span-5 row-span-3', // Large wide
      'col-span-3 row-span-3', // Medium square
      'col-span-4 row-span-4', // Large tall
      'col-span-5 row-span-2', // Wide rectangle
      'col-span-3 row-span-2', // Small rectangle
      'col-span-4 row-span-3', // Medium square
      'col-span-5 row-span-4'  // Extra large
    ];
    return desktopSizes[index % desktopSizes.length];
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-10 -z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)`
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative p-4 md:p-8">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-16 pt-8 md:pt-12">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin text-white mb-4 tracking-wider"
            style={{
              background: 'linear-gradient(45deg, #ffffff, #a855f7, #3b82f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(168, 85, 247, 0.5)'
            }}
          >
            COLLECTION
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32 md:w-64 mx-auto"></div>
        </div>

        {/* Innovative Masonry Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-2 sm:gap-3 md:gap-4 auto-rows-auto">
            {products.map((product, index) => {
              const isHovered = hoveredIndex === index;
              const { width } = windowSize;
              
              return (
                <div
                  key={index}
                  className={`relative group cursor-pointer transform transition-all duration-700 ease-out 
                    ${getGridSize(index)}`}
                  style={{
                    transform: isHovered 
                      ? 'scale(1.05) translateZ(50px)' 
                      : `translateY(${Math.sin(index + scrollY * 0.01) * (width < 640 ? 5 : 10)}px`,
                    filter: isHovered ? 'none' : 'brightness(0.8)',
                    zIndex: isHovered ? 20 : 1
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Morphing border */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(45deg, #a855f7, #3b82f6, #ef4444, #10b981)',
                      padding: '3px',
                      borderRadius: '20px',
                      animation: isHovered ? 'morphing 3s ease-in-out infinite, pulse-glow 2s ease-in-out infinite' : 'none'
                    }}
                  >
                    <div className="w-full h-full bg-black rounded-[17px]"></div>
                  </div>

                  {/* Image container */}
                  <div className="relative w-full h-full overflow-hidden rounded-lg md:rounded-2xl">
                    {/* Gradient overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"
                      style={{
                        background: `linear-gradient(135deg, 
                          rgba(168, 85, 247, 0.4) 0%, 
                          rgba(59, 130, 246, 0.4) 50%, 
                          rgba(16, 185, 129, 0.4) 100%)`
                      }}
                    ></div>

                    {/* Main image */}
                    <img
                      src={product}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{
                        filter: isHovered 
                          ? 'brightness(1.1) contrast(1.1) saturate(1.2)' 
                          : 'brightness(0.9) contrast(0.9)'
                      }}
                    />

                    {/* Shimmer effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                      style={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                        transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
                        transition: 'transform 1s ease-out'
                      }}
                    ></div>

                    {/* Corner accent */}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150"></div>
                  </div>

                  {/* Floating glow effect */}
                  {isHovered && (
                    <div 
                      className="absolute -inset-1 sm:-inset-2 md:-inset-4 rounded-xl md:rounded-3xl opacity-30 blur-md md:blur-xl"
                      style={{
                        background: 'linear-gradient(45deg, #a855f7, #3b82f6, #ef4444)',
                        animation: 'pulse-glow 2s ease-in-out infinite'
                      }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-16 md:h-32"></div>
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-50">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white"></div>
          <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
        </div>
      </div>

      {/* Global styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes morphing {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(59, 130, 246, 0.3); }
        }
      `}</style>
    </div>
  );
};

export default UniqueProductsPage;