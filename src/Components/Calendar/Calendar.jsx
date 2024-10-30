import { useState, useEffect } from "react";
import ReactCalendar from "react-calendar";
import "./CalendarStyle.css";
import ListItemTitle from "../List/ListItemTitle";
import List from "../List/List";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";

function Calendar({ data, handleDeleteItem }) {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState(data);
  const [openalert, setOpenAlert] = useState(false);
  const [iteminlistselected, setItemInListSelected] = useState(null);

  const eventForSelectDay = events.filter(
    (event) => new Date(event.fechaHora).toDateString() === value.toDateString()
  );

  console.log(openalert);
  console.log(iteminlistselected);

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
                  action={
                    <Button
                      variant="btn_icon btn_small btn_secondary_lighten"
                      handleClick={(_) => {
                        setItemInListSelected(element.id), setOpenAlert(true);
                      }}
                    >
                      x
                    </Button>
                  }
                >
                  {element.fechaHora}
                </ListItemTitle>
              </List>
            ))}
          </ul>
        ) : (
          <p>No hay eventos para este dia</p>
        )}
        <div
          ClassName="agendamiento_container"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <Button variant="btn_small">Agendar cita</Button>
        </div>
      </div>

      {iteminlistselected && Number(iteminlistselected) > -1 && (
        <Alert autoopen={openalert}>
          <div
            ClassName="question_container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            ¿Confirmas la suspensión de tu cita?
          </div>

          <div
            ClassName="button_container"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="btn_secondary"
              handleClick={(_) => {
                handleDeleteItem(iteminlistselected);
              }}
            >
              Suspender
            </Button>
          </div>
        </Alert>
      )}
    </div>
  );
}
export default Calendar;
