/* PatiDevs Agrega y Modifica Tramites*/
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormControl from "../../Components/Form/FormControl";
import InputField from "../../Components/Form/InputField";
import TextArea from "../../Components/Form/TextArea";
import axios from "axios";
import List from "../../Components/List/List";
import ListItemTitle from "../../Components/List/ListItemTitle";
import "./ListadoTramitesStyle.css";
import Button from "../../Components/Button/Button";

function AgregarTramite({ setInfoPage }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cargaDeArchivo, setCargaDeArchivo] = useState("");
  const [terminosYCondiciones, setTerminosYCondiciones] = useState("");
  const [pagoAsociado, setPagoAsociado] = useState("");
  const [agendamiento, setAgendamiento] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteItem = () => {
    const body = {};
    if (id) {
      axios
        .delete(`http://localhost:8080/api/tramites/borrar/${id}`, body)
        .then((response) => {
          if (response) {
            navigate("/listadotramites");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    setInfoPage({
      title: "Agregado de trámites",
      subtitle:
        "Estas en el apartado para agregar y/o modificar una plantilla de trámite",
    });
  }, []);

  const handleSubmit = () => {
    const body = {
      nombre: nombre,
      descripcion: descripcion,
    };

    if (id) {
      axios
        .put(`http://localhost:8080/api/tramites/editar/${id}`, body)
        .then((response) => {
          if (response) {
            navigate("/listadotramites");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post(`http://localhost:8080/api/tramites/nuevo/1`, body)
        .then((response) => {
          if (response) {
            navigate("/listadotramites");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/tramites/${id}`).then((response) => {
        console.log("onMounted", response.data);
        setNombre(response.data.nombre);
        setDescripcion(response.data.descripcion);
      });
    }
  }, []);

  return (
    <div className="agregar_tramites_container">
      <FormControl handleFormSubmit={handleSubmit}>
        <InputField
          outlined={true}
          value={nombre}
          name={"Nombre"}
          handleChange={setNombre}
          placeholder={"Nombre de Tramite"}
          required={true}
        />
        <TextArea
          outlined={true}
          value={descripcion}
          name={"Descripción"}
          handleChange={setDescripcion}
          placeholder={"Descripción de Tramite"}
          required={false}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Requerimiento del trámite
        </div>
        <div className="listado_tramite_container" style={{ width: "350px" }}>
          <div className="listado_tramite_body">
            <List>
              <ListItemTitle>
                <div
                  style={{
                    display: "flex",
                    width: "250px",
                    gap: "15px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="checkboxAT1"
                    onChange={(e) => setAgendamiento(e.target.checked)}
                    checked={agendamiento}
                  />
                  <label htmlFor="checkboxAT1">Requiere agendamiento</label>
                </div>
              </ListItemTitle>
            </List>
            <List>
              <ListItemTitle>
                <div
                  style={{
                    display: "flex",
                    width: "250px",
                    gap: "15px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="checkboxAT2"
                    onChange={(e) => setPagoAsociado(e.target.checked)}
                    checked={pagoAsociado}
                  />
                  <label htmlFor="checkboxAT2">Pago asociado</label>
                </div>
              </ListItemTitle>
            </List>
            <List>
              <ListItemTitle>
                <div
                  style={{
                    display: "flex",
                    width: "250px",
                    gap: "15px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="checkboxAT3"
                    onChange={(e) => setTerminosYCondiciones(e.target.checked)}
                    checked={terminosYCondiciones}
                  />
                  <label htmlFor="checkboxAT3">Términos y condiciones</label>
                </div>
              </ListItemTitle>
            </List>
            <List>
              <ListItemTitle>
                <div
                  style={{
                    display: "flex",
                    width: "250px",
                    gap: "15px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="checkboxAT4"
                    onChange={(e) => setCargaDeArchivo(e.target.checked)}
                    checked={cargaDeArchivo}
                  />
                  <label htmlFor="checkboxAT4">Cargar archivo</label>
                </div>
              </ListItemTitle>
            </List>
          </div>
        </div>
      </FormControl>
      <div style={{ display: id ? "block" : "none" }}>
        <Button
          handleClick={() => handleDeleteItem()}
          variant={"btn_rounded btn_secondary"}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
}

export default AgregarTramite;
