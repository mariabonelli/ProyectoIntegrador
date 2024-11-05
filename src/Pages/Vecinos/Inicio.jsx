/* PatiDevs Vista Principal del Vecino */
import Button from "../../Components/Button/Button";
import List from "../../Components/List/List";
import ListItemTitle from "../../Components/List/ListItemTitle";
import "./InicioStyle.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Inicio({ setInfoPage }) {
  const navigate = useNavigate();

  useEffect(() => {
    setInfoPage({
      title: "Inicio",
      subtitle: "Bienvenido a inicio",
    });
  }, []);

  return (
    <div className="container_inicio_vecino">
      <List>
        <Button
          handleClick={() => navigate("/tramiteporservicio")}
          variant={"btn_outlined"}
        >
          <ListItemTitle subtitle={"Gestiona trámites para la mascota"}>
            Veterinaria
          </ListItemTitle>
        </Button>
      </List>
      <List>
        <Button
          handleClick={() => navigate("/tramiteporservicio")}
          variant={"btn_outlined"}
        >
          <ListItemTitle subtitle={"Gestiona trámites para áreas verdes"}>
            Áreas Verdes
          </ListItemTitle>
        </Button>
      </List>
      <List>
        <Button
          handleClick={() => navigate("/estadotramites")}
          variant={"btn_outlined"}
        >
          <ListItemTitle subtitle={"Revisa el proceso de los trámites"}>
            Estado de trámites
          </ListItemTitle>
        </Button>
      </List>
      <List>
        <Button
          handleClick={() => navigate("/historialtramitesfinalizados")}
          variant={"btn_outlined"}
        >
          <ListItemTitle subtitle={"Revisa los trámites finalizados"}>
            Historial trámites finalizados
          </ListItemTitle>
        </Button>
      </List>
      <List>
        <Button
          handleClick={() => navigate("/otrasconsultas")}
          variant={"btn_outlined"}
        >
          <ListItemTitle subtitle={"Ver otras consultas de los usuarios"}>
            Otras consultas
          </ListItemTitle>
        </Button>
      </List>
      <List>
        <Button
          handleClick={() => navigate("/otrasconsultas")}
          variant={"btn_outlined"}
        >
          <ListItemTitle subtitle={"Revisa el historial de tus notificaciones"}>
            Historial de notificaciones
          </ListItemTitle>
        </Button>
      </List>
    </div>
  );
}

export default Inicio;
