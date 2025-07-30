import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


export default function Calendar() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Calendari</h2>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
}
