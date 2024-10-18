import React from 'react';

export const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-8 p-6">
      {/* Skeleton for Navbar */}
      <div className="flex items-center justify-between bg-gray-800 h-12 w-full rounded-lg">
        <div className="bg-gray-700 h-8 w-36 rounded-md"></div>
        <div className="bg-gray-700 h-8 w-8 rounded-full"></div>
      </div>
      
      {/* Skeleton for Hero */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg h-64">
        <div className="flex-1 space-y-4">
          <div className="bg-gray-700 h-8 w-3/4 rounded-md"></div>
          <div className="bg-gray-700 h-6 w-1/2 rounded-md"></div>
          <div className="bg-gray-700 h-10 w-1/4 rounded-md"></div>
        </div>
        <div className="bg-gray-700 h-40 w-40 md:h-64 md:w-64 rounded-lg"></div>
      </div>

      {/* Skeleton for ServicesLoop */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-gray-800 p-4 rounded-lg space-y-3">
            <div className="bg-gray-700 h-24 w-full rounded-md"></div>
            <div className="bg-gray-700 h-6 w-3/4 rounded-md"></div>
          </div>
        ))}
      </div>

      {/* Skeleton for Projects */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="bg-gray-700 h-8 w-1/3 rounded-md mb-4"></div>
        <div className="bg-gray-700 h-32 w-full rounded-md"></div>
      </div>

      {/* Skeleton for Testimonial */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="bg-gray-700 h-8 w-1/3 rounded-md mb-4"></div>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-700 h-12 w-12 rounded-full"></div>
          <div className="flex-1 space-y-3">
            <div className="bg-gray-700 h-6 w-full rounded-md"></div>
            <div className="bg-gray-700 h-6 w-3/4 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Skeleton for ContactForm */}
      <div className="bg-gray-800 p-6 rounded-lg space-y-4">
        <div className="bg-gray-700 h-6 w-1/2 rounded-md"></div>
        <div className="bg-gray-700 h-12 w-full rounded-md"></div>
        <div className="bg-gray-700 h-12 w-full rounded-md"></div>
        <div className="bg-gray-700 h-12 w-3/4 rounded-md"></div>
      </div>

      {/* Skeleton for Footer */}
      <div className="bg-gray-800 h-16 w-full rounded-lg"></div>
    </div>
  );
};
