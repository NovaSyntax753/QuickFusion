import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Happy Client",
    rating: 5,
    text: "Quick service and excellent support. The team really understood our requirements.",
    date: "JustDial Review"
  },
  {
    id: 2,
    name: "Satisfied Customer",
    rating: 5,
    text: "Very professional team. Delivered the project on time with great quality.",
    date: "JustDial Review"
  },
   {
    id: 3,
    name: "Business Owner",
    rating: 5,
    text: "Great experience working with QuickFusion. Highly recommended for digital services.",
    date: "JustDial Review"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="flex flex-col items-center justify-center mb-4">
             <div className="flex items-center space-x-2">
                <span className="text-4xl font-bold text-gray-900">5.0</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
             </div>
             <span className="text-sm text-gray-500 mt-2">Based on 94 Ratings on JustDial</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
              <div className="flex items-center justify-between border-t pt-4">
                <span className="font-semibold text-gray-900">{review.name}</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="https://www.justdial.com/Nagpur/QuickFusion-Innovations-Kachi-Visa-Oswal-Ground-Chapru-Nagar/0712PX712-X712-240814121154-W3C5_BZDET" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl text-white bg-[#49af2f] hover:bg-[#3d8f26] hover:shadow-xl hover:scale-105 transition-all duration-300">
                View All Reviews on JustDial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
