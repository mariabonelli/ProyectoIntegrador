import { Routes, Route } from "react-router-dom";
import Drawer from "./Components/Drawer/Drawer";
import Departamentos from "./Pages/Administrador/Departamentos";
import Servicios from "./Pages/Administrador/Servicios";
import Solicitudes from "./Pages/Administrador/Solicitudes";
import ListadoDeServicios from "./Pages/ListadoDeServicios";
import AgendaFuncionario from "./Pages/Funcionarios/AgendaFuncionario";
import Agenda from "./Pages/Agenda";

function App() {
  return (
    <>
      <Drawer>
        <Routes>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/" element={<Agenda />} />
          <Route path="/AgendaFuncionario" element={<AgendaFuncionario />} />
        </Routes>
      </Drawer>
    </>
  );
}

export default App;
