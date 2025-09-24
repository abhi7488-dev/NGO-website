import React from 'react';

// Use the same images as before
import waterImg from '../assets/water.jpg';
import healthImg from '../assets/healthcare.jpg';
import foodImg from '../assets/food.jpg';

const UpcomingEvents = () => {
    const events = [
        {
            id: 1,
            tag: "Environment",
            title: "Clean Water Initiative",
            description: "Join a community effort to clean local water sources and raise awareness about water conservation.",
            date: "October 26, 2025",
            time: "10:00 AM - 2:00 PM",
            location: "Riverfront Park",
            image: waterImg,
        },
        {
            id: 2,
            tag: "Health & Wellness",
            title: "Community Health Fair",
            description: "Free health screenings, wellness workshops, and consultations with medical professionals.",
            date: "November 10, 2025",
            time: "10:00 AM - 2:00 PM",
            location: "Civic Center",
            image: healthImg,
        },
        {
            id: 3,
            tag: "Hunger Relief",
            title: "Food Donation Drive",
            description: "Help us collect non-perishable food items to support local families in need during the holiday season.",
            date: "December 5, 2025",
            time: "10:00 AM - 2:00 PM",
            location: "Main Street Shelter",
            image: foodImg,
        }
    ];

    // SVG Icons
    const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>;
    const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;

    return (
        <div className="bg-gray-100 py-15">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">Upcoming Events</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Get involved and make a difference. Find an opportunity to contribute to our cause.
                    </p>
                </div>

                {/* CONTAINER CHANGED to a vertical stack for one card per row */}
                <div className="space-y-12">
                    {events.map((event, index) => (
                        <div key={event.id} className="group flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
                            
                            <div className="relative md:w-5/12 flex-shrink--0">
                                <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"/>
                            </div>
                            
                            <div className="flex flex-col flex-grow p-8">
                                <div className="inline-block bg-[#ac571f] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 self-start">
                                    {event.tag}
                                </div>
                                
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">{event.title}</h2>
                                <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>

                                <div className="flex flex-wrap gap-x-10 gap-y-3 text-gray-500 text-sm mb-8">
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LocationIcon />
                                        <span>{event.location}</span>
                                    </div>
                                      <button className="font-semibold py-3 px-8 text-white bg-[#b95726] rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-[#a74c22] focus:outline-none focus:ring-2 focus:ring-[#a74c22] focus:ring-offset-2 self-start">
                                    Register
                                </button>
                                </div>

                              
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;