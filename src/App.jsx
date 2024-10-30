import { Routes, Route } from "react-router-dom";
import Drawer from "./Components/Drawer/Drawer";
import Departamentos from "./Pages/Administrador/Departamentos";
import Servicios from "./Pages/Administrador/Servicios";
import Solicitudes from "./Pages/Administrador/Solicitudes";
import AgregarDepartamento from "./Pages/Administrador/AgregarDepartamento";
import AgregarServicio from "./Pages/Administrador/AgregarServicio";
import VistaDeConfiServicio from "./Pages/Administrador/VistaDeConfiServicio";
import VerDetalles from "./Pages/Administrador/VerDetalles";

function App() {
  return (
    <>
      <Drawer>
        <Routes>
          <Route path="/" element={<Departamentos />} />

          <Route path="/servicios" element={<Servicios />} />

          <Route
            path="/agregardepartamento"
            element={<AgregarDepartamento />}
          />

          <Route path="/agregarservicio" element={<AgregarServicio />} />

          <Route
            path="/vistaDeConfiServicio"
            element={<VistaDeConfiServicio />}
          />
          <Route path="/verDetalles" element={<VerDetalles />} />
        </Routes>
      </Drawer>
    </>
  );
}

export default App;
