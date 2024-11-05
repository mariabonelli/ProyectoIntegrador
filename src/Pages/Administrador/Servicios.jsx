import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ServiciosStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "../../Components/Form/InputField";
import Button from "../../Components/Button/Button";
import Alert from "../../Components/Alert/Alert";

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemSelected, setItemSelected] = useState(null);
  const [itemSelectedName, setItemSelectedName] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [departamentos, setDepartamentos] = useState([]);

  const { departamento } = useParams();
  const navigate = useNavigate();

  const filterByName = servicios.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/servicios/lista`
      );
      setServicios(response.data);
      console.log(response);
    } catch (error) {
      console.log("Error fetching servicios:", error);
    }
  };

  const handledeleteItem = () => {
    setDeleteDialog(!deleteDialog);
    setTimeout(() => {
      setDeleteDialog(false);
    }, 1000);
  };

  const handleDeleteItemById = () => {
    axios
      .delete(`http://localhost:8080/api/servicios/eliminar/${itemSelected}`)
      .then((res) => {
        if (res.data) {
          axios
            .get(
              `http://localhost:8080/api/servicios/${departamento}/verlistaservicios`
            )
            .then((res) => {
              setServicios(res.data);
              handledeleteItem();
              setItemSelected(null);
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      })
      .catch((error) => {});
  };
  const FilterDepartamentoById = departamentos.filter(
    (item) => item.id === Number(departamento)
  );

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/servicios/${departamento}/verlistaservicios`
      )
      .then((res) => {
        axios
          .get("http://localhost:8080/api/departamentos/lista")
          .then((resp) => {
            setDepartamentos(resp.data);
            setServicios(res.data);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <div className="container_lista">
        <h1>
          {FilterDepartamentoById[0] && FilterDepartamentoById[0].nombre}{" "}
        </h1>
        <div className="barra_de_busqueda_container">
          <div className="barra_de_busqueda_container_input">
            <InputField
              value={searchTerm}
              type={"text"}
              name={"search"}
              required={true}
              placeholder={"Filtrar Listado de Servicios "}
              handleChange={setSearchTerm}
            />
          </div>
        </div>
        <div className="encabezados">
          <span className="encabezado_id">ID </span>
          <span className="encabezado_nombre"> Nombre Servicio</span>
        </div>
        {filterByName.map((servicio) => (
          <div key={servicio.id} className="servicio">
            <input
              type="checkbox"
              checked={itemSelected === servicio.id}
              onChange={() => {
                setItemSelected(servicio.id),
                  setItemSelectedName(servicio.nombre);
              }}
            />
            <span className="span1">{servicio.id}</span>
            <span className="span2">{servicio.nombre}</span>

            <Link to={`/agregarservicio/${servicio.id}/null`}>
              Ver detalles
            </Link>
          </div>
        ))}
        <div className="botones">
          <Button
            handleClick={() => handledeleteItem()}
            disabled={itemSelected === null ? true : false}
          >
            Eliminar{" "}
          </Button>
          <Button
            handleClick={() =>
              navigate(`/agregarservicio/${itemSelected}/${departamento}`)
            }
            disabled={itemSelected === null ? true : false}
          >
            Modificar{" "}
          </Button>
          <Button
            handleClick={() =>
              navigate(`/agregarservicio/${itemSelected}/${departamento}`)
            }
          >
            Agregar +{" "}
          </Button>
        </div>
      </div>
      <Alert key={itemSelected} autoopen={deleteDialog} selfclosing={true}>
        <div
          style={{
            padding: "20px 15px",
            textAlign: "center",
            fontSize: "17px",

            color: "var(--tertiary-color)",
          }}
        >
          ¿Confirmas eliminar el Servicio <strong>'{itemSelectedName}'</strong>{" "}
          ?
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "25px 0 0",
            }}
          >
            <Button
              handleClick={() => handleDeleteItemById()}
              variant={"btn_secondary"}
            >
              Confirmar
            </Button>
          </div>
        </div>
      </Alert>
    </>
  );
};

export default Servicios;
