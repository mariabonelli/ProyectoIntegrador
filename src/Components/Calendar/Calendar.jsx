import { useState } from "react";
import ReactCalendar from "react-calendar";

const Data = [
  {
    _id: 1,
    vecino_id: 1,
    funcionario_id: 1,
    start: new Date(2024, 9, 21, 10, 0),
    /*              YYYY, M-1,D, hh: mm */
    end: new Date(2024, 9, 21, 10, 0),
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

  return (
    <>
      <div>
        <ReactCalendar
          value={value}
          onChange={setValue}
          tileContent={({ date, view }) => {
            // Customiza la visualización de los eventos en cada celda
            const eventForDay = events.find(
              (event) => event.start.toDateString() === date.toDateString()
            );

            return (
              <div style={{ textAlign: "center" }}>
                {eventForDay && <div>{eventForDay.motivo}</div>}
              </div>
            );
          }}
        />
      </div>
    </>
  );
}
export default Calendar;
