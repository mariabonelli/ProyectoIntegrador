/* SaiyaBits */
import { useState } from "react";
import FormControl from "../../Components/Form/FormControl";
import InputField from "../../Components/Form/InputField";
import TextArea from "../../Components/Form/TextArea";
import "./VistaDeConfiServicioStyle.css";
import Checkbox from "../../Components/Form/Checkbox";
import Button from "../../Components/Button/Button";
import Servicios from "./Servicios";

function VistaDeConfiServicio() {
  const [nombreConfi, setNombreConfi] = useState("");
  const [descNombreConfi, setDescNombreConfi] = useState("");
  const [agregar_imagen, setAgregarImagen] = useState(false);
  const [agregar_pdf, setAgregarPdf] = useState(false);
  const [agregar_comentario, setAgregarComentario] = useState(false);
  const [terminos_condiciones, setTerminosyCondiciones] = useState(false);
  const [textoTerminosCondiciones, setTextoTerminosCondiciones] = useState("");

  const handleFormSubmit = () => {
    const data = {
      nombreConfi: nombreConfi,
      descNombreConfi: descNombreConfi,
      agregar_imagen: agregar_imagen,
      agregar_pdf: agregar_pdf,
      agregar_comentario: agregar_comentario,
      terminos_condiciones: terminos_condiciones,
      textoTerminosCondiciones: textoTerminosCondiciones,
    };
    console.log(data);
  };
  return (
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
            handleChange={setAgregarImagen}
            valor={"Agregar imagen"}
            value={agregar_imagen}
          />
          <Checkbox
            handleChange={setAgregarPdf}
            valor={"Agregar PDF"}
            value={agregar_pdf}
          />
          <Checkbox
            handleChange={setAgregarComentario}
            valor={"Agregar comentario"}
            value={agregar_comentario}
          />
          <Checkbox
            handleChange={setTerminosyCondiciones}
            valor={"Agregar Términos y condiciones"}
            value={terminos_condiciones}
          />
          <TextArea
            value={textoTerminosCondiciones}
            outlined={true}
            name={"terminos_y_condiciones"}
            required={true}
            placeholder={"Escriba términos y condiciones"}
            handleChange={setTextoTerminosCondiciones}
          />
        </FormControl>
      </div>
    </div>
  );
}

export default VistaDeConfiServicio;
