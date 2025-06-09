// src/components/TestimonialSlider.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; // Icons for slider navigation
import { StarIcon } from '@heroicons/react/20/solid'; // Solid star icon for ratings

// Sample Testimonial Data (you can expand this array)
const testimonials = [
  {
    id: 1,
    quote: "When my mother had a sudden blood pressure spike, I used Axen's WhatsApp support to get advice. They not only arranged a quick consultation but also recommended a nearby diagnostic lab with a discount. It felt like having a doctor in the family.",
    author: 'Alka Tiwari',
    rating: 4, // out of 5
    image: 'https://via.placeholder.com/60/cbd5e1/4a5568?text=AT', // Placeholder image URL
  },
  {
    id: 2,
    quote: "I've used health plans before, but they all felt transactional. Axen is different. They follow up. They check in. My health manager even reminded me when I missed my second check-up. It's that kind of accountability that makes me trust them deeply.",
    author: 'Vinod Agarwal',
    rating: 5,
    image: 'https://via.placeholder.com/60/e2e8f0/4a5568?text=VA', // Placeholder image URL
  },
  {
    id: 3,
    quote: "With Axen, I don't have to chase multiple providers. Everything I need is in one place. It felt like having a doctor in the family. I was amazed at how smooth it was. I genuinely feel like I have a team looking out for me.",
    author: 'Arvind K',
    rating: 5,
    image: 'https://via.placeholder.com/60/e2e8f0/4a5568?text=AK', // Placeholder image URL
  },
  {
    id: 4,
    quote: "AxenCare has transformed how my family approaches health. The ease of access to specialists and the personalized support are unmatched. Highly recommend for comprehensive care!",
    author: 'Priya Sharma',
    rating: 4,
    image: 'https://via.placeholder.com/60/e0f2f7/4a5568?text=PS', // Placeholder image URL
  },
  {
    id: 5,
    quote: "Never thought healthcare could be this seamless. From teleconsultations to managing my reports, everything is streamlined. AxenCare truly cares about your well-being.",
    author: 'Rahul Singh',
    rating: 5,
    image: 'https://via.placeholder.com/60/d1fae5/4a5568?text=RS', // Placeholder image URL
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Starting index of the visible testimonials
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default for large screens

  // Function to calculate items per page based on screen width
  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1024) { // lg breakpoint
      setItemsPerPage(3);
    } else if (window.innerWidth >= 768) { // md breakpoint
      setItemsPerPage(2);
    } else { // sm and smaller
      setItemsPerPage(1);
    }
  };

  useEffect(() => {
    updateItemsPerPage(); // Set initial items per page
    window.addEventListener('resize', updateItemsPerPage); // Listen for resize events
    return () => window.removeEventListener('resize', updateItemsPerPage); // Cleanup
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentItems = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      // If we are at the end, loop back to the beginning
      if (prevIndex + itemsPerPage >= testimonials.length) {
        return 0;
      }
      return prevIndex + 1; // Move by one item
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      // If we are at the beginning, loop to the end
      if (prevIndex === 0) {
        return testimonials.length - itemsPerPage >= 0 ? testimonials.length - itemsPerPage : 0;
      }
      return prevIndex - 1; // Move by one item
    });
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          aria-hidden="true"
        />
      );
    }
    return <div className="flex justify-center mb-4">{stars}</div>;
  };

  return (
    <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Axen Care</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-600 leading-tight mt-2 mb-6">
          What Our <span className="text-green-600">Clients Say</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-12">
          Read how Axen Care is transforming healthcare experiences for individuals and families. Our clients share their stories of enhanced well-being and peace of mind through our personalized plans and comprehensive benefits.
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
            {currentItems.map((testimonial) => (
              <div key={testimonial.id} className="relative bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full">
                {/* Quote Icon */}
                <svg className="absolute -top-4 -left-4 w-12 h-12 text-blue-200 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 11c-2.206 0-4 1.794-4 4s1.794 4 4 4c1.696 0 3.203-.984 3.864-2.484l-.196-.064C10.428 15.342 10 14.28 10 13c0-1.654 1.346-3 3-3s3 1.346 3 3c0 .82-.368 1.554-.94 2.05L13 16.5V19h7v-7c0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.696.984 3.203 2.484 3.864l.064.196C14.658 15.428 15 16.58 15 17c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-.82.368-1.554.94-2.05L11 15.5V12h-4v-1z"></path>
                </svg>

                {renderStars(testimonial.rating)}
                <p className="text-gray-700 text-base mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-green-400 mr-4"
                  />
                  <p className="font-semibold text-gray-800 text-lg">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > itemsPerPage && ( // Only show arrows if there are more items than fit on page
            <>
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 z-10"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="h-6 w-6 text-gray-700" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;