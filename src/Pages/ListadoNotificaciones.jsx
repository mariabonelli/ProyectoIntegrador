import List from "../Components/List/List";
import ListItemTitle from "../Components/List/ListItemTitle";
import "./ListaDeServiciosStyle.css";

function ListadoNotificaciones({ data }) {
  const ParseDate = (date) => {
    const fecha = new Date(date);
    return fecha.toLocaleDateString("es-ES", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="listado_servicios_container">
      {data.map((item) => (
        <div key={item.notificacionId}>
          <List>
            <ListItemTitle
              subtitle={
                <>
                  {item.contenidoMensaje} dsfgdskfjhdskjghdsklhfdshfsdhj <br />{" "}
                  {item.leida ? "leido" : "no leido"}{" "}
                </>
              }
              action={ParseDate(item.createdAt)}
            >
              {item.usuarioId.nombre}
            </ListItemTitle>
          </List>
        </div>
      ))}
    </div>
  );
}
export default ListadoNotificaciones;
