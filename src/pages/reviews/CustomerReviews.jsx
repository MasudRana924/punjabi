import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      review: "Absolutely gorgeous Punjabi suits! The embroidery work is exquisite and the fabric quality is outstanding. I received so many compliments at my cousin's wedding. Will definitely shop again!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      purchaseType: "Wedding Collection",
      verified: true
    },
    {
      id: 2,
      name: "Simran Kaur",
      location: "Delhi, India",
      rating: 5,
      review: "The custom tailoring service is exceptional! They understood exactly what I wanted and delivered beyond my expectations. The fit is perfect and the design is unique.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      purchaseType: "Custom Design",
      verified: true
    },
    {
      id: 3,
      name: "Rajdeep Singh",
      location: "Chandigarh, India",
      rating: 5,
      review: "Bought a beautiful suit for my sister's engagement. The staff was very helpful in choosing the right colors and the quality is premium. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      purchaseType: "Festive Collection",
      verified: true
    },
    {
      id: 4,
      name: "Manpreet Kaur",
      location: "Ludhiana, India",
      rating: 5,
      review: "Amazing collection of traditional Punjabi dresses! The variety is incredible and prices are very reasonable. The shopping experience was delightful from start to finish.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      purchaseType: "Traditional Wear",
      verified: true
    },
    {
      id: 5,
      name: "Jaspreet Kaur",
      location: "Amritsar, India",
      rating: 5,
      review: "The attention to detail in their embroidery work is phenomenal. I've been a customer for 3 years now and they never disappoint. Best place for authentic Punjabi suits!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      purchaseType: "Designer Collection",
      verified: true
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToReview = (index) => {
    setCurrentReview(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg">Real reviews from happy customers</p>
        </div>

        {/* Main Review Display */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mx-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full transform rotate-12"></div>
            </div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-purple-200">
              <Quote className="w-12 h-12" />
            </div>

            <div className="relative z-10">
              {/* Customer Info */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="relative">
                  <img
                    src={reviews[currentReview].image}
                    alt={reviews[currentReview].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-purple-200 shadow-lg"
                  />
                  {reviews[currentReview].verified && (
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1">
                      <Heart className="w-4 h-4 fill-current" />
                    </div>
                  )}
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {reviews[currentReview].name}
                  </h3>
                  <p className="text-gray-500 mb-2">{reviews[currentReview].location}</p>
                  <div className="flex justify-center md:justify-start mb-2">
                    {renderStars(reviews[currentReview].rating)}
                  </div>
                  <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {reviews[currentReview].purchaseType}
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{reviews[currentReview].review}"
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevReview}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentReview
                          ? 'bg-purple-500 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;