import { useState } from "react";
import ReactCalendar from "react-calendar";
import "./CalendarStyle.css";

const Data = [
  {
    _id: 1,
    vecino_id: 1,
    funcionario_id: 1,
    start: new Date(2024, 9, 20, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    end: new Date(2024, 9, 20, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    tramite_id: 1,
    motivo: "cachupin",
    estado: "agendada",
  },
  {
    _id: 2,
    vecino_id: 1,
    funcionario_id: 1,
    start: new Date(2024, 9, 21, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    end: new Date(2024, 9, 21, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    tramite_id: 1,
    motivo: "Gatito enfermo",
    estado: "agendada",
  },
  {
    _id: 3,
    vecino_id: 1,
    funcionario_id: 1,
    start: new Date(2024, 9, 21, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    end: new Date(2024, 9, 21, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    tramite_id: 1,
    motivo: "Perrito enfermo",
    estado: "agendado",
  },
];

function Calendar() {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState(Data);

  const eventForSelectDay = events.filter(
    (event) => event.start.toDateString() === value.toDateString()
  );

  return (
    <div className="react_calendar_container">
      <div className="calendar_container">
        <ReactCalendar
          className="custom_calendar"
          value={value}
          onChange={setValue}
          tileClassName={({ date }) => {
            const eventForDay = events.find(
              (event) => event.start.toDateString() === date.toDateString()
            );
            return eventForDay ? "find_event" : null;
            /*  return eventForSelectDay.length ? "find_event" : ""; */
          }}
        />
      </div>
      <div className="events_container">
        {console.log(value)}
        <h2>
          Eventos del{" "}
          {value.toLocaleDateString("es-ES", {
            weekdate: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          {eventForSelectDay.length}
        </h2>

        {eventForSelectDay.length > 0 ? (
          <ul>
            {eventForSelectDay.map((element) => (
              <li key={element._id}>
                <span></span>
                {element.motivo}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay eventos para este dia</p>
        )}
      </div>
    </div>
  );
}
export default Calendar;
