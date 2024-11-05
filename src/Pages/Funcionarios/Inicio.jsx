/* PatiDevs El inicio de Funcionario, se entra en /funcionario
 */

import Button from "../../Components/Button/Button";
import { useEffect } from "react";
import List from "../../Components/List/List";
import ListItemTitle from "../../Components/List/ListItemTitle";
import "./InicioStyle.css";
import { useNavigate } from "react-router-dom";

function Inicio({ setInfoPage }) {
  const navigate = useNavigate();

  useEffect(() => {
    setInfoPage({
      title: "Inicio Funcionarios",
      subtitle: "Bienvenido funcionario",
    });
  }, []);

  return (
    <div className="container_inicio_funcionario">
      <List>
        <Button
          handleClick={() => navigate("/administraciondetramites")}
          variant={"btn_outlined"}
        >
          <ListItemTitle subtitle={"Gestiona trámites para la mascota"}>
            Veterinaria
          </ListItemTitle>
        </Button>
      </List>
      <List>
        <Button
          handleClick={() => navigate("/administraciondetramites")}
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
        <Button handleClick={() => navigate("")} variant={"btn_outlined"}>
          <ListItemTitle subtitle={"Revisa el historial de tus notificaciones"}>
            Historial de notificaciones
          </ListItemTitle>
        </Button>
      </List>
    </div>
  );
}

export default Inicio;
