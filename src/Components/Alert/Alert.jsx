import { Children, useState } from "react";
import "./AlertStyle.css";
import Button from "../Button/Button";

function ComponenteHijo({ nombredehijo }) {
  return (
    <>
      <h1>Soy tu hijo</h1>
      <p>{nombredehijo}</p>
    </>
  );
}

function ComponentePadre() {
  return <ComponenteHijo nombredehijo="Marcelito" />;
}

/* 
Poprs => unidireccionales, se pasan desde el contenedor a elemento contenido
*/

function Alert({ children }) {
  const [abierto, setAbierto] = useState(true);
  console.log(abierto);
  return (
    <>
      <Button
        variant={"btn_icon btn_secondary"}
        handleClick={() => {
          setAbierto(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </svg>
      </Button>

      <div
        className={`container_dialog ${
          abierto ? "container_alert_open" : "container_alert_close"
        }`}
        onClick={() => {
          setAbierto(!abierto);
        }} //puedo borrar esta línea para manejar la visibilidad con la animación?
        /*style={{ display: abierto ? "flex " : "none" }}*/
        role="button"
      >
        {/* <button
        onClick={() => {
          setAbierto(true);
        }}
      >
        open
      </button> */}

        <div
          className="alert"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}

          <button
            className="alert_btn"
            onClick={() => {
              setAbierto(false);
            }}
          >
            <span>cerrar</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default Alert;
