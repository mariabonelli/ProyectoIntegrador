/* SaiyaBits */
import { useState, useEffect } from "react";
import FormControl from "../../Components/Form/FormControl";
import InputField from "../../Components/Form/InputField";
import TextArea from "../../Components/Form/TextArea";
import "./VistaDeConfiServicioStyle.css";
import Checkbox from "../../Components/Form/Checkbox";
import Button from "../../Components/Button/Button";
import Servicios from "./Servicios";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function VistaDeConfiServicio() {
  const [nombreConfi, setNombreConfi] = useState("");
  const [descNombreConfi, setDescNombreConfi] = useState("");
  const [agregar_imagen, setAgregarImagen] = useState(false);
  const [agregar_pdf, setAgregarPdf] = useState(false);
  const [agregar_comentario, setAgregarComentario] = useState(false);
  const [terminos_condiciones, setTerminosyCondiciones] = useState(false);
  const [textoTerminosCondiciones, setTextoTerminosCondiciones] = useState("");

  const { id, departamento } = useParams();
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    const body = {
      nombre: nombreConfi,
      descripcion: descNombreConfi,
      agregarImagen: agregar_imagen,
      agregarPdf: agregar_pdf,
      agregarComentario: agregar_comentario,
      terminosCondiciones: terminos_condiciones,
      textoTerminosCondiciones: textoTerminosCondiciones,
    };
    if (id !== "null") {
      console.log(id);
      console.log("se edita");
      axios
        .put(`http://localhost:8080/api/servicios/editar/${id}`, body)
        .then((res) => {
          if (res.data) {
            navigate(`/servicios/${departamento}`);
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    } else {
      console.log("se agrega");
      axios
        .post(`http://localhost:8080/api/servicios/${departamento}/crear`, body)
        .then((res) => {
          if (res.data) {
            navigate(`/servicios/${departamento}`);
          }
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  };
  useEffect(() => {
    if (id !== "null") {
      axios
        .get(`http://localhost:8080/api/servicios/${id}`)
        .then((resp) => {
          console.log(resp.data);
          setNombreConfi(resp.data.nombre);
          setDescNombreConfi(resp.data.descripcion);
          setAgregarImagen(resp.data.agregarImagen);
          setAgregarPdf(resp.data.agregarPdf);
          setAgregarComentario(resp.data.agregarComentario);
          setTerminosyCondiciones(resp.data.terminosCondiciones);
          setTextoTerminosCondiciones(resp.data.textoTerminosCondiciones);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  }, []);
  console.log("id", id);
  console.log("departamento", departamento);
  return (
    <div className="container_lista">
      <div className="configurar_vista_servicio_container">
        <div className="configurar_vista_servicio_container_form">
          <FormControl handleFormSubmit={handleFormSubmit}>
            <InputField
              value={nombreConfi}
              outlined={true}
              type={"text"}
              name={"servicio"}
              required={true}
              placeholder={"Nombre de servicio"}
              handleChange={setNombreConfi}
            />
            <TextArea
              value={descNombreConfi}
              outlined={true}
              name={"descripcion_servicio"}
              required={true}
              placeholder={"Descripción de servicio"}
              handleChange={setDescNombreConfi}
            />

            <Checkbox
              valor={"Agregar imagen"}
              isChecked={agregar_imagen}
              handleChange={() => setAgregarImagen(!agregar_imagen)}
            />
            <Checkbox
              valor={"Agregar PDF"}
              isChecked={agregar_pdf}
              handleChange={() => setAgregarPdf(!agregar_pdf)}
            />

            <Checkbox
              valor={"Agregar comentario"}
              isChecked={agregar_comentario}
              handleChange={() => setAgregarComentario(!agregar_comentario)}
            />

            <Checkbox
              valor={"Agregar Términos y condiciones"}
              isChecked={terminos_condiciones}
              handleChange={() =>
                setTerminosyCondiciones(!terminos_condiciones)
              }
            />
            {terminos_condiciones && (
              <TextArea
                value={textoTerminosCondiciones}
                outlined={true}
                name={"terminos_y_condiciones"}
                required={true}
                placeholder={
                  "Escriba términos y condiciones (Máximo 250 de carácteres)"
                }
                handleChange={setTextoTerminosCondiciones}
              />
            )}
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default VistaDeConfiServicio;
