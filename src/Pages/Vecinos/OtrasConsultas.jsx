/* PatiDevs Otras consultas para Vecino desde InicioVecino */
import List from "../../Components/List/List";
import ListItemTitle from "../../Components/List/ListItemTitle";
import "./OtrasConsultasStyle.css";
import { useEffect } from "react";
import ListadoDeServicios from "../ListadoDeServicios";

function OtrasConsultas({ setInfoPage }) {
  useEffect(() => {
    setInfoPage({
      title: "Contáctanos",
      subtitle: "Estas en el apartado de otras consultas",
    });
  }, []);

  return (
    <div className="container_otras_consultas">
      <List>
        <ListItemTitle subtitle={"contacto@renca.cl"}>
          Correo electrónico
        </ListItemTitle>
      </List>
      <List>
        <ListItemTitle subtitle={"+56 2 2685 6600"}>
          Contacto telefónico
        </ListItemTitle>
      </List>
      <List>
        <ListItemTitle
          subtitle={"Blanco Encalada N° 1335, Plaza de Renca, Renca."}
        >
          Ubicación
        </ListItemTitle>
      </List>
      <List>
        <ListItemTitle
          subtitle={
            "+56 2 3241 1999, lunes a viernes de 08:30 a 14:00 hrs - 15:00 a 17:00 hrs."
          }
        >
          Atención social telefónica
        </ListItemTitle>
      </List>
    </div>
  );
}

export default OtrasConsultas;
