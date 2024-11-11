import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import List from "../List/List";
import ListItemTitle from "../List/ListItemTitle";
import Button from "../Button/Button";
import "./TimePickerStyle.css";
import horasDisponibles from "../../assets/AvailableHours/AvailableHours";
import axios from "axios";

//http://localhost:8080/api/horarios/disponibilidad/1/1?fecha=2024-11-06
function TimePicker({ schedule, key, setKey }) {
  const [availableHours, setAvailableHours] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState(schedule); // Cambié `data` por `schedule`
  const [daySelected, setDaySelected] = useState(null);

  const handleDateOnChange = (date) => {
    setSelectedDate(date);
  };

  const handleHourSelected = (hour) => {
    // Obtén la fecha en formato yyyy-MM-dd
    const formattedDate = selectedDate.toISOString().split("T")[0];
    // Combina la fecha con la hora en el formato correcto
    const fechaHora = `${formattedDate}-${hour.substring(0, 5)}`;
    console.log("fecha y hora: ", fechaHora);
    axios
      .get(
        `http://localhost:8080/api/agendamientos/agendar/1/1?fechaHora=${fechaHora}`
      )
      .then((respuesta) => {
        console.log(respuesta.data);
        alert("Cita agendada con éxito.");
        setKey(key + 1);
      })
      .catch((error) => {
        console.log("error: ", error);
        alert("Hubo un problema al agendar la cita.");
      });

    // axios.get("URL").then((resp)=>...).catch((error)=> ...)
  };

  const findInSchedule = (hours, date) =>
    schedule.find(
      (element) =>
        element.fechaHora.split(" ")[1] === hours &&
        new Date(element.fechaHora).toDateString() === date.toDateString()
    );

  const eventForSelectDay = events.filter(
    (event) =>
      new Date(event.fechaHora).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="container_timepicker">
      <h3 className="timepicker_title">
        Fecha seleccionada: {selectedDate.toDateString()}
      </h3>

      <div className="content_timepicker">
        {daySelected === null ? (
          <div>
            <Calendar
              onClickDay={() => setDaySelected(true)}
              onChange={handleDateOnChange}
              value={selectedDate}
            />
          </div>
        ) : (
          <>
            <div
              style={{ height: "400px", maxHeight: "400px", overflowY: "auto" }}
            >
              {horasDisponibles.map((hour) => (
                <List key={hour.id}>
                  <ListItemTitle
                    action={
                      findInSchedule(hour.hora, selectedDate) === undefined ? (
                        <Button
                          handleClick={() => handleHourSelected(hour.hora)}
                          variant="btn_small btn_tertiary"
                        >
                          <small>Agendar hora</small>
                        </Button>
                      ) : (
                        <Button
                          variant="btn_small btn_tertiary"
                          disabled={true}
                        >
                          no disponible
                        </Button>
                      )
                    }
                  >
                    {hour.hora}
                  </ListItemTitle>
                </List>
              ))}
            </div>
          </>
        )}
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "end",
          padding: "15px 0 0 0",
          borderTop: "1px solid #ddd",
        }}
      >
        <div
          style={{
            visibility: daySelected ? "visible" : "hidden",
          }}
        > */}
      <div style={{ float: "left" }}>
        <Button handleClick={() => setDaySelected(null)} variant={"btn_small"}>
          {" "}
          {"<"} atrás
        </Button>
      </div>

      {/* </div>
      </div> */}
    </div>
  );
}

export default TimePicker;
