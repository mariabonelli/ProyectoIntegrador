import { useState } from "react";
import ReactCalendar from "react-calendar";
import "./CalendarStyle.css";
import ListItemTitle from "../List/ListItemTitle";
import List from "../List/List";

function Calendar({ data }) {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState(data);

  const eventForSelectDay = events.filter(
    (event) => new Date(event.fechaHora).toDateString() === value.toDateString()
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
              (event) =>
                new Date(event.fechaHora).toDateString() === date.toDateString()
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
        </h2>

        {eventForSelectDay.length > 0 ? (
          <ul>
            {eventForSelectDay.map((element) => (
              <List key={element.id}>
                <ListItemTitle
                  subtitle={element.estado}
                  action={element.fechaHora.split(" ")[1]}
                >
                  Conversar con patidevs
                </ListItemTitle>
              </List>
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
