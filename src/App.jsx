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
import EstadoTramiteFuncionario from "./Pages/Funcionarios/EstadoTramite";
import EstadoTramiteVecino from "./Pages/Vecinos/EstadoTramite";

function App() {
  return (
    <>
      <Drawer>
        <Routes>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/" element={<InicioVecino />} />
          <Route path="/funcionario" element={<InicioFuncionario />} />
          <Route path="/listadotramites" element={<ListadoTramites />} />
          <Route path="/agregartramites" element={<AgregarTramite />} />
          <Route
            path="/agregartramites/item/:id"
            element={<AgregarTramite />}
          />
          <Route
            path="/vecino/estadotramites"
            element={<EstadoTramiteVecino />}
          />
          <Route
            path="/funcionario/estadotramites"
            element={<EstadoTramiteFuncionario />}
          />
        </Routes>
      </Drawer>
    </>
  );
}

export default App;
