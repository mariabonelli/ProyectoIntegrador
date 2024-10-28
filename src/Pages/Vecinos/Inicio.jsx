/* PatiDevs */
import List from "../../Components/List/List";
import ListItemTitle from "../../Components/List/ListItemTitle";
import "./InicioStyle.css";

function Inicio() {
  return (
    <div className="container_inicio_vecino">
      <List>
        <ListItemTitle subtitle={"Gestiona trámites para la mascota"}>
          Veterinaria
        </ListItemTitle>
      </List>
      <List>
        <ListItemTitle subtitle={"Gestiona trámites para áreas verdes"}>
          Áreas Verdes
        </ListItemTitle>
      </List>
      <List>
        <ListItemTitle subtitle={"Revisa el proceso de los trámites"}>
          Estado de trámites
        </ListItemTitle>
      </List>
      <List>
        <ListItemTitle subtitle={"Revisa los trámites finalizados"}>
          Historial trámites finalizados
        </ListItemTitle>
      </List>
      <List>
        <ListItemTitle subtitle={"Ver otras consultas de los usuarios"}>
          Otras consultas
        </ListItemTitle>
      </List>
      <List>
        <ListItemTitle subtitle={"Revisa el historial de tus notificaciones"}>
          Historial de notificaciones
        </ListItemTitle>
      </List>
    </div>
  );
}

export default Inicio;
