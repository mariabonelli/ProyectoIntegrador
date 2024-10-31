/* PatiDevs El inicio de Funcionario, se entra en /funcionario
 */

import Button from "../../Components/Button/Button";
import List from "../../Components/List/List";
import ListItemTitle from "../../Components/List/ListItemTitle";
import "./InicioStyle.css";
import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="container_inicio_funcionario">
      <List>
        <Button
          handleClick={() => navigate("/listadotramites")}
          variant={"btn_outlined"}
        >
          <ListItemTitle subtitle={"Gestiona trámites para la mascota"}>
            Veterinaria
          </ListItemTitle>
        </Button>
      </List>
      <List>
        <Button
          handleClick={() => navigate("/listadotramites")}
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
          handleClick={() => navigate("/listadotramitesfinalizados")}
          variant={"btn_outlined"}
        >
          <ListItemTitle subtitle={"Revisa los trámites finalizados"}>
            Historial trámites finalizados
          </ListItemTitle>
        </Button>
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
