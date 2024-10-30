import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Drawer from "./Components/Drawer/Drawer";
import Departamentos from "./Pages/Administrador/Departamentos";
import Servicios from "./Pages/Administrador/Servicios";
import Solicitudes from "./Pages/Administrador/Solicitudes";
import ListadoDeServicios from "./Pages/ListadoDeServicios";
import Login from "./Components/Login/Login";

function App() {
  const [user, setUser] = useState(null);

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
      <Drawer logOut={logOut}>
        <Routes>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/" element={<ListadoDeServicios />} />
        </Routes>
      </Drawer>
      {!user && <Login loginIsSuccess={setUser} />}
    </>
  );
}

export default App;
