import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for clicks

const EventsCalendar = () => {
  const events = [
    { title: "Health Awareness Camp", date: "2025-09-10" },
    { title: "Tree Plantation Drive", date: "2025-09-15" },
    { title: "Education Workshop", start: "2025-09-20T14:00:00", end: "2025-09-20T18:00:00" },
  ];

  const handleEventClick = (info) => {
    alert(`Event: ${info.event.title}\nDate: ${info.event.start.toLocaleString()}`);
    // 👉 Instead of alert, you can open a modal here
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-black mb-4">NGO Events Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        height="650px"
        eventClick={handleEventClick} // ✅ handle click
      />
    </div>
  );
};

export default EventsCalendar;
