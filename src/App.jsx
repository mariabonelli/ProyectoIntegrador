import { Routes, Route } from "react-router-dom";
import Drawer from "./Components/Drawer/Drawer";
import Departamentos from "./Pages/Administrador/Departamentos";
import Servicios from "./Pages/Administrador/Servicios";
import Solicitudes from "./Pages/Administrador/Solicitudes";
import AgregarDepartamento from "./Pages/Administrador/AgregarDepartamento";
import AgregarServicio from "./Pages/Administrador/AgregarServicio";
import VistaDeConfiServicio from "./Pages/Administrador/VistaDeConfiServicio";

function App() {
  return (
    <>
      <Drawer>
        <Routes>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/" element={<VistaDeConfiServicio />} />
        </Routes>
      </Drawer>
    </>
  );
}

export default App;
