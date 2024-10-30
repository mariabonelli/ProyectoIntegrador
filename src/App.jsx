import { Routes, Route } from "react-router-dom";

import Drawer from "./Components/Drawer/Drawer";

import Departamentos from "./Pages/Administrador/Departamentos";

import Servicios from "./Pages/Administrador/Servicios";

import Solicitudes from "./Pages/Administrador/Solicitudes";

import ListadoDeServicios from "./Pages/ListadoDeServicios";

import InicioVecino from "./Pages/Vecinos/Inicio";

import InicioFuncionario from "./Pages/Funcionarios/Inicio";

import OtrasConsultas from "./Pages/Vecinos/OtrasConsultas";

import TramitePorServicio from "./Pages/Vecinos/TramitePorServicio";

import AgregarTramite from "./Pages/Funcionarios/AgregarTramite";
import ListadoTramites from "./Pages/Funcionarios/ListadoTramites";
import ListadoTramitesFinalizados from "./Pages/Funcionarios/ListadoTramiteFinalizado";

function App() {
  return (
    <>
      <Drawer>
        <Routes>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/" element={<AgregarTramite />} />
          <Route path="/listadotramites" element={<ListadoTramites />} />
          <Route
            path="/listadotramitesfinalizados"
            element={<ListadoTramitesFinalizados />}
          />
        </Routes>
      </Drawer>
    </>
  );
}

export default App;
