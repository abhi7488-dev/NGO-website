import React from 'react';
import waterImg from '../assets/water.jpg';
import healthImg from '../assets/healthcare.jpg'
import foodImg from '../assets/food.jpg'

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Clean Water Initiative",
      date: "October 26, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Riverfront Park",
      description: "Join us in a community effort to clean up local water sources and raise awareness about water conservation.",
      image: waterImg,
      category: "Environment"
    },
    {
      id: 2,
      title: "Community Health Fair",
      date: "November 10, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Civic Center",
      description: "Free health screenings, wellness workshops, and consultations with medical professionals for the whole community.",
      image: healthImg,
      category: "Health & Wellness"
    },
    {
      id: 3,
      title: "Food Donation Drive",
      date: "December 5, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "Main Street Shelter",
      description: "Help us collect non-perishable food items to support local families in need during the holiday season.",
      image: foodImg,
      category: "Hunger Relief"
    }
  ];

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mt-2 mb-4">Upcoming Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get involved and make a difference! Browse our calendar of upcoming events and find the perfect opportunity to contribute to our cause. Your participation helps us create a better community for everyone.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map(event => (
            <div key={event.id} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              
              {/* Floating Date & Category Badge */}
              {/* <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {event.category}
              </div> */}

              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h2>
                <div className="flex items-center text-gray-500 text-sm mb-1">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>{event.date} | {event.time}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-700 mb-6">{event.description}</p>
                <button 
                  className="w-full bg-[#b25022] text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-300 hover:bg-[#a03e1f] focus:outline-none focus:ring-2 focus:ring-[#b25022] focus:ring-opacity-50"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;