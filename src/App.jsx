import { Routes, Route } from "react-router-dom";

import Drawer from "./Components/Drawer/Drawer";

import Departamentos from "./Pages/Administrador/Departamentos";

import Servicios from "./Pages/Administrador/Servicios";

import Solicitudes from "./Pages/Administrador/Solicitudes";

import ListadoDeServicios from "./Pages/ListadoDeServicios";

import InicioVecino from "./Pages/Vecinos/Inicio";

import InicioFuncionario from "./Pages/Funcionarios/Inicio";

import { useEffect, useState } from "react";
import axios from "axios";

import Login from "./Components/Login/Login";
import OtrasConsultas from "./Pages/Vecinos/OtrasConsultas";

import TramitePorServicio from "./Pages/Vecinos/TramitePorServicio";
import HistorialTramiteFinalizados from "./Pages/Vecinos/HistorialTramiteFinalizados";
import AgregarTramite from "./Pages/Funcionarios/AgregarTramite";
import ListadoTramites from "./Pages/Funcionarios/ListadoTramites";
import ListadoTramitesFinalizados from "./Pages/Funcionarios/ListadoTramiteFinalizado";
import EstadoTramite from "./Pages/Vecinos/EstadoTramite";

import AdministracionDeTramites from "./Pages/Funcionarios/AdministracionDeTramites";
import AgregarDepartamento from "./Pages/Administrador/AgregarDepartamento";
import AgregarServicio from "./Pages/Administrador/AgregarServicio";
import VistaDeConfiServicio from "./Pages/Administrador/VistaDeConfiServicio";
import VerDetalles from "./Pages/Administrador/VerDetalles";
import AgendaFuncionario from "./Pages/Funcionarios/AgendaFuncionario";
import Upload from "./Components/Upload/Upload";
import Agenda from "./Pages/Agenda";

function App() {
  const [user, setUser] = useState(null);
  const [infoPage, setInfoPage] = useState({
    title: "Título página",
    subtitle: "detalle de página",
  });

  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const sesion = localStorage.getItem("user");
    if (sesion) {
      setUser(JSON.parse(sesion));
    }
  }, []);
  const tipo = user && user !== null ? user.tipoUser.slice(1, -1) : undefined;

  return (
    <>
      <Drawer logOut={logOut} infoPage={infoPage}>
        <Routes>
          <Route
            path={"/"}
            element={
              tipo !== "ROLE_VECINO" ? (
                <InicioFuncionario setInfoPage={setInfoPage} />
              ) : (
                <InicioVecino setInfoPage={setInfoPage} />
              )
            }
          />
          <Route path="/agenda" element={<Agenda />} />
          <Route
            path="/historialtramitesfinalizados"
            element={<HistorialTramiteFinalizados setInfoPage={setInfoPage} />}
          ></Route>
          <Route
            path="/historialtramitesfinalizados/:id"
            element={<HistorialTramiteFinalizados setInfoPage={setInfoPage} />}
          ></Route>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />

          <Route
            path="/listadotramites"
            element={<ListadoTramites setInfoPage={setInfoPage} />}
          />
          <Route
            path="/listadotramitesfinalizados"
            element={<ListadoTramitesFinalizados setInfoPage={setInfoPage} />}
          />
          <Route
            path="/otrasconsultas"
            element={<OtrasConsultas setInfoPage={setInfoPage} />}
          ></Route>
          <Route
            path="/tramiteporservicio"
            element={<TramitePorServicio setInfoPage={setInfoPage} />}
          ></Route>
          <Route
            path="/estadotramites"
            element={<EstadoTramite setInfoPage={setInfoPage} />}
          ></Route>
          <Route
            path="/agregartramites"
            element={<AgregarTramite setInfoPage={setInfoPage} />}
          ></Route>
          <Route
            path="/agregartramites/item/:id"
            element={<AgregarTramite setInfoPage={setInfoPage} />}
          ></Route>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route
            path="/administraciondetramites"
            element={<AdministracionDeTramites setInfoPage={setInfoPage} />}
          ></Route>
          <Route path="/servicios/:departamento" element={<Servicios />} />
          <Route
            path="/agregardepartamento"
            element={<AgregarDepartamento />}
          />
          {/* <Route
            path="/agregarservicio/:id"
            element={<VistaDeConfiServicio />}
          /> */}
          <Route
            path="/agregarservicio/:id/:departamento"
            element={<VistaDeConfiServicio />}
          />

          <Route
            path="/vistadeconfiservicio"
            element={<VistaDeConfiServicio />}
          />
          <Route path="/verdetalles" element={<VerDetalles />} />
          <Route path="/AgendaFuncionario" element={<AgendaFuncionario />} />
        </Routes>
      </Drawer>
      {!user && <Login loginIsSuccess={setUser} />}
    </>
  );
}
export default App;
