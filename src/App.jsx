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
<<<<<<< HEAD
import EstadoTramiteFuncionario from "./Pages/Funcionarios/EstadoTramite";
import EstadoTramiteVecino from "./Pages/Vecinos/EstadoTramite";
=======
import ListadoTramitesFinalizados from "./Pages/Funcionarios/ListadoTramiteFinalizado";
>>>>>>> 3f38815357a36282d6393ad0b4f423032026009a

function App() {
  return (
    <>
      <Drawer>
        <Routes>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/" element={<InicioVecino />} />
          <Route path="/listadotramites" element={<ListadoTramites />} />
<<<<<<< HEAD
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
=======
          <Route
            path="/listadotramitesfinalizados"
            element={<ListadoTramitesFinalizados />}
>>>>>>> 3f38815357a36282d6393ad0b4f423032026009a
          />
        </Routes>
      </Drawer>
    </>
  );
}

export default App;
