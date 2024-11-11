import { Link } from "react-router-dom";
import "./DrawerStyle.css";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import List from "../List/List";
import ListItemTitle from "../List/ListItemTitle";
import rencalogo from "../../assets/Renca.png";
import AlertaDeNotificaciones from "../AlertaDeNotificacion";

const Rutas = ({ logOut }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const tipo = user ? user.tipoUser.slice(1, -1) : undefined;

  return (
    <>
      <div className="container_user_drawer">
        {user && (
          <List>
            <ListItemTitle
              action={
                <svg
                  width="29"
                  height="24"
                  viewBox="0 0 29 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6887 11.7887C12.7592 11.7887 11.1074 11.2194 9.73334 10.0809C8.35928 8.94237 7.67225 7.57372 7.67225 5.97495C7.67225 4.37617 8.35928 3.00753 9.73334 1.86901C11.1074 0.730485 12.7592 0.161224 14.6887 0.161224C16.6183 0.161224 18.2701 0.730485 19.6441 1.86901C21.0182 3.00753 21.7052 4.37617 21.7052 5.97495C21.7052 7.57372 21.0182 8.94237 19.6441 10.0809C18.2701 11.2194 16.6183 11.7887 14.6887 11.7887ZM0.655762 23.4161V19.3465C0.655762 18.5229 0.911571 17.7659 1.42319 17.0755C1.93481 16.3851 2.61453 15.8583 3.46236 15.4949C5.27495 14.744 7.11678 14.1808 8.98784 13.8053C10.8589 13.4298 12.7592 13.2421 14.6887 13.2421C16.6183 13.2421 18.5186 13.4298 20.3896 13.8053C22.2607 14.1808 24.1025 14.744 25.9151 15.4949C26.7629 15.8583 27.4427 16.3851 27.9543 17.0755C28.4659 17.7659 28.7217 18.5229 28.7217 19.3465V23.4161H0.655762ZM4.164 20.5093H25.2135V19.3465C25.2135 19.08 25.1331 18.8378 24.9723 18.6198C24.8115 18.4018 24.5995 18.2322 24.3364 18.1111C22.7577 17.4571 21.1644 16.9665 19.5564 16.6395C17.9485 16.3125 16.3259 16.149 14.6887 16.149C13.0516 16.149 11.429 16.3125 9.82105 16.6395C8.2131 16.9665 6.61977 17.4571 5.04107 18.1111C4.77795 18.2322 4.56599 18.4018 4.4052 18.6198C4.2444 18.8378 4.164 19.08 4.164 19.3465V20.5093ZM14.6887 8.88181C15.6535 8.88181 16.4794 8.59718 17.1664 8.02792C17.8535 7.45866 18.197 6.77433 18.197 5.97495C18.197 5.17556 17.8535 4.49124 17.1664 3.92198C16.4794 3.35272 15.6535 3.06809 14.6887 3.06809C13.724 3.06809 12.8981 3.35272 12.211 3.92198C11.524 4.49124 11.1805 5.17556 11.1805 5.97495C11.1805 6.77433 11.524 7.45866 12.211 8.02792C12.8981 8.59718 13.724 8.88181 14.6887 8.88181Z"
                    fill="white"
                  />
                </svg>
              }
            >
              {user.email}
            </ListItemTitle>
          </List>
        )}
      </div>

      <ul className="vertical_list">
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to="/agenda">Agenda</Link>
        </li>
        {tipo !== "ROLE_VECINO" && (
          <>
            <li>
              <Link to="/departamentos">Lista de departamentos</Link>
            </li>
            <li>
              <Link to="/departamentos">Departamentos</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/AgendaFuncionario">Agenda Funcionario</Link>
            </li>
          </>
        )}

        <li>
          <div style={{ padding: "20px" }}>
            <Button variant="btn_secondary" handleClick={() => logOut()}>
              Cerrar sesión
            </Button>
          </div>
        </li>
      </ul>
    </>
  );
};

function Drawer({ children, logOut, infoPage }) {
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
            <div className="drawer_container_img">
              <img width={200} src={rencalogo} alt="ícono" />
            </div>
            <label htmlFor="drawer_toggle" id="drawer_close">
              {" "}
              &#10005;{" "}
            </label>
            <div className="container_vertical_list">
              <Rutas logOut={logOut} />
            </div>
          </div>
          <label htmlFor="drawer_toggle" id="drawer_overlay">
            {" "}
          </label>
        </nav>
        <span className="drawer_title">{infoPage.title}</span>
        <AlertaDeNotificaciones />
      </header>
      <aside id="sidebar">
        <Rutas logOut={logOut} />
      </aside>

      <main>
        <div className="container_app">
          <Banner infoPage={infoPage} />
          {children}
        </div>
      </main>
    </>
  );
}

export default Drawer;
