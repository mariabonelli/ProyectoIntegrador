import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Drawer from "./Components/Drawer/Drawer";
import HistorialDeNotificaciones from "./Pages/HistorialDeNotificaciones";
import ListadoNotificaciones from "./Pages/ListadoNotificaciones";

function App() {
  return (
    <>
      <Drawer>
        <Routes>
          <Route path="/" element={<HistorialDeNotificaciones />} />
          <Route
            path="/historialdenotificaciones"
            element={<HistorialDeNotificaciones />}
          />
        </Routes>
      </Drawer>
    </>
  );
}

export default App;
