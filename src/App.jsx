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
    console.log(sesion);
    if (sesion) {
      setUser(sesion);
    }
  }, []);

  return (
    <>
      <Drawer logOut={logOut} infoPage={infoPage}>
        <Routes>
          <Route
            path="/historialtramitesfinalizados"
            element={<HistorialTramiteFinalizados setInfoPage={setInfoPage} />}
          ></Route>
          <Route
            path="/historialtramitesfinalizados/:id"
            element={<HistorialTramiteFinalizados />}
          ></Route>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/" element={<InicioVecino />} />
          <Route path="/funcionario" element={<InicioFuncionario />} />
          <Route path="/listadotramites" element={<ListadoTramites />} />
          <Route
            path="/listadotramitesfinalizados"
            element={<ListadoTramitesFinalizados />}
          />
          <Route path="/otrasconsultas" element={<OtrasConsultas />}></Route>
          <Route
            path="/tramiteporservicio"
            element={<TramitePorServicio />}
          ></Route>
          <Route path="/estadotramites" element={<EstadoTramite />}></Route>
          <Route path="/agregartramites" element={<AgregarTramite />}></Route>
          <Route
            path="/agregartramites/item/:id"
            element={<AgregarTramite />}
          ></Route>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route
            path="/historialtramitesfinalizados/:id"
            element={<HistorialTramiteFinalizados />}
          ></Route>
          <Route
            path="/administraciondetramites"
            element={<AdministracionDeTramites />}
          ></Route>
        </Routes>
      </Drawer>
      {!user && <Login loginIsSuccess={setUser} />}
    </>
  );
}
export default App;
