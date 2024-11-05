/*  PatiDevs Listado general de Tramites para Funcionario excluyendo FINALIZADOS */
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import List from "../../Components/List/List";
import ListItemTitle from "../../Components/List/ListItemTitle";
import "./ListadoTramitesStyle.css";
import Button from "../../Components/Button/Button";

function ListadoTramites({ setInfoPage }) {
  const [selecteditems, SetSelecteditem] = useState(null);
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/tramites/lista`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response) {
          setData(response.data);
        }
      });
  }, []);

  useEffect(() => {
    setInfoPage({
      title: "Listado de trámites",
      subtitle:
        "Estas en el apartado para revisar la lista de plantillas de trámites",
    });
  }, []);

  console.log(token);
  return (
    <div className="listado_tramites_container">
      <div className="listado_tramites_body">
        {" "}
        {data.map((item) => (
          <List key={item._id}>
            <ListItemTitle>
              <div
                style={{
                  display: "flex",
                  width: "250px",
                }}
              >
                <input
                  type="checkbox"
                  id={item._id}
                  checked={item._id === selecteditems}
                  onChange={() => {
                    SetSelecteditem(item._id);
                  }}
                />
                <label
                  htmlFor={item._id}
                  style={{
                    display: "flex",
                  }}
                >
                  <span style={{ width: "30px", marginLeft: "10px" }}>
                    {" "}
                    {item._id}{" "}
                  </span>
                  <span> {item.nombre} </span>
                </label>
              </div>
            </ListItemTitle>
          </List>
        ))}
      </div>
      <div className="listado_tramites_action">
        <Button
          handleClick={() => navigate("/agregartramites")}
          variant={"btn_rounded btn_secondary"}
        >
          Agregar
        </Button>
        <div style={{ visibility: selecteditems ? "visible" : "hidden" }}>
          <Button
            handleClick={() =>
              navigate(`/agregartramites/item/${selecteditems}`)
            }
            variant={"btn_rounded"}
          >
            Modificar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ListadoTramites;
