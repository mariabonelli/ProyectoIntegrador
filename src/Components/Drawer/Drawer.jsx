import "./DrawerStyle.css";
import Banner from "../Banner/Banner";

function Drawer({ children }) {
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
            <div className="container_vertical_list">
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
          </div>
          <label htmlFor="drawer_toggle" id="drawer_overlay">
            {" "}
          </label>
        </nav>
        <span className="drawer_title">Título de página</span>
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

      <main>
        <div className="container_app">
          <Banner />
          {children}
        </div>
      </main>
    </>
  );
}

export default Drawer;
