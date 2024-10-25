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
  const [user, setUser] = useState(null)


  useEffect(()=>{ 
    const body={
      "email": "unicajefa@renca.cl",
      "password": "fun123"
  }
    //axios.get("URL").then().catch()
    //axios.post("URL", {body(que es un objeto)}).then().catch()
    axios.post("http://localhost:8080/api/auth/login", body)
    .then((resp)=>{
      //console.log(resp.data)
      setUser(resp.data)
      localStorage.setItem("user", JSON.stringify(resp.data))
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])


  return (
    <>
      <Drawer>
        <Routes>
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/" element={<ListadoDeServicios />} />
        </Routes>
      </Drawer>
      {!user&&<Login />}
    </>
  );
}

export default App;
