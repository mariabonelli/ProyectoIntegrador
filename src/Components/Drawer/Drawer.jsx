import "./DrawerStyle.css";

function Drawer() {
  return (
    <>
      <header>
        <nav>
          <label htmlFor="drawer_toggle" id="drawer_open">
            {" "}
            &#9776;{" "}
          </label>
          <input type="checkbox" name="drawer_close" id="drawer_toggle" />
          <div id="drawer">
            <label htmlFor="drawer_toggle" id="drawer_close">
              {" "}
              &#10005;{" "}
            </label>
            <ul className="vertical_list">
              <li>
                <a>Inicio de sesión</a>
              </li>
              <li>
                <a>Trámites veterinarios</a>
              </li>
              <li>
                <a>Trámites de áreas verdes</a>
              </li>
              <li>
                <a>Estado de trámites</a>
              </li>
              <li>
                <a>Historial de trámites finalizados</a>
              </li>
              <li>
                <a>Otras consultas</a>
              </li>
              <li>
                <a>Perfil</a>
              </li>
              <li>
                <a>Cerrar sesión</a>
              </li>
            </ul>
          </div>
          <label htmlFor="drawer_toggle" id="drawer_overlay">
            {" "}
          </label>
        </nav>
      </header>
      <aside id="sidebar">
        <ul className="vertical_list">
          <li>
            <a>Inicio de sesión</a>
          </li>
          <li>
            <a>Trámites veterinarios</a>
          </li>
          <li>
            <a>Trámites de áreas verdes</a>
          </li>
          <li>
            <a>Estado de trámites</a>
          </li>
          <li>
            <a>Historial de trámites finalizados</a>
          </li>
          <li>
            <a>Otras consultas</a>
          </li>
          <li>
            <a>Perfil</a>
          </li>
          <li>
            <a>Cerrar sesión</a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Drawer;
