import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Drawer from "./Components/Drawer/Drawer";
import Departamentos from "./Pages/Administrador/Departamentos";
import Servicios from "./Pages/Administrador/Servicios";
import Solicitudes from "./Pages/Administrador/Solicitudes";
import ListadoDeServicios from "./Pages/ListadoDeServicios";
import HistorialDeNotificaciones from "./Pages/HistorialDeNotificaciones";
import ListadoDePlantillas from "./Pages/Funcionarios/ListadoDePlantillas";
import ActualizacionDePlantillas from "./Pages/Funcionarios/ActualizacionDePlantilla";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/notificaciones/lista")
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data.results);
      })
      .catch((error) => {});
  }, []);
  return (
    <>
      <Drawer>
        <Routes>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/" element={<ListadoDeServicios />} />
          <Route
            path="/historialnoti"
            element={<HistorialDeNotificaciones />}
          />
          <Route path="/listadoplantillas" element={<ListadoDePlantillas />} />
          <Route
            path="/actuplantilla"
            element={<ActualizacionDePlantillas />}
          />
        </Routes>
      </Drawer>
    </>
  );
}

export default App;
