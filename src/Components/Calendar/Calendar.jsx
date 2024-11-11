import { useState, useEffect } from "react";
import ReactCalendar from "react-calendar";
import "./CalendarStyle.css";
import ListItemTitle from "../List/ListItemTitle";
import List from "../List/List";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import TimePicker from "./TimePicker";

function Calendar({ data, handleDeleteItem, schedule, key, setKey }) {
  const [autoOpen, setautoOpen] = useState(undefined);
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState(data);
  const [openalert, setOpenAlert] = useState(false);
  const [iteminlistselected, setItemInListSelected] = useState(null);
  //event.filter por data.filter
  const eventForSelectedDay = data.filter(
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
            const eventForDay = data.find(
              (event) =>
                new Date(event.fechaHora).toDateString() === date.toDateString()
            );
            return eventForDay ? "find_event" : null;
            /*  return eventForSelectDay.length ? "find_event" : ""; */
          }}
        />
      </div>
      <div className="events_container">
        <h2>
          Eventos del{" "}
          {value.toLocaleDateString("es-ES", {
            weekdate: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
        </h2>

        {eventForSelectedDay.length > 0 ? (
          <ul>
            {eventForSelectedDay.map((element) => (
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
          className="agendamiento_container"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <Alert
            opensection={<Button variant="btn_small">Agendar cita</Button>}
          >
            <TimePicker schedule={schedule} key={key} setKey={setKey} />
          </Alert>
        </div>
      </div>

      {
        <div key={`alert${openalert}`}>
          <Alert autoopen={openalert}>
            <div
              className="question_container"
              style={{ display: "flex", justifyContent: "center" }}
            >
              ¿Confirmas la suspensión de tu cita?
            </div>

            <div
              className="button_container"
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
        </div>
      }
    </div>
  );
}
export default Calendar;
