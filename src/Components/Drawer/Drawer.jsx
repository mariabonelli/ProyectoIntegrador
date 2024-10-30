import { Link } from "react-router-dom";
import "./DrawerStyle.css";
import Banner from "../Banner/Banner";

const Rutas = () => {
  return (
    <ul className="vertical_list">
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/servicios">Servicios</Link>
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
  );
};

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
              <Rutas />
            </div>
          </div>
          <label htmlFor="drawer_toggle" id="drawer_overlay">
            {" "}
          </label>
        </nav>
        <span className="drawer_title">Título de página</span>
      </header>
      <aside id="sidebar">
        <Rutas />
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
