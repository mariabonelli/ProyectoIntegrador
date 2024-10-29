/* SaiyaBits */
import { useState } from "react";
import FormControl from "../../Components/Form/FormControl";
import InputField from "../../Components/Form/InputField";
import TextArea from "../../Components/Form/TextArea";
import "./AgregarDepartamentoStyle.css";
import Checkbox from "../../Components/Form/Checkbox";

function VistaDeConfiServicio() {
  const [nombreConfi, setNombreConfi] = useState("");
  const [descNombreConfi, setDescNombreConfi] = useState("");
  const [agregar_imagen, setAgregarImagen] = useState(false);
  const [agregar_pdf, setAgregarPdf] = useState(false);
  const [agregar_comentario, setAgregarComentario] = useState(false);
  const [terminos_condiciones, setTerminosyCondiciones] = useState(false);

  const handleFormSubmit = () => {
    const data = {
      nombreConfi: nombreConfi,
      descNombreConfi: descNombreConfi,
      agregar_imagen: agregar_imagen,
      agregar_pdf: agregar_pdf,
      agregar_comentario: agregar_comentario,
      terminos_condiciones: terminos_condiciones,
    };
    console.log(data);
  };
  return (
    <div className="configurar_vista_servicio_container">
      <div className="configurar_vista_servicio_form">
        <FormControl handleFormSubmit={handleFormSubmit}>
          <InputField placeholder="Nombre de servicio" type="text" />
          <TextArea placeholder="Descripción de servicio" />
          <Checkbox valor="Agregar imagen" />
          <Checkbox valor="Agregar pdf" />
          <Checkbox valor="Agregar comentario" />
          <Checkbox valor="Agregar Términos y condiciones" />
          <TextArea placeholder="Escriba términos y condiciones" />
        </FormControl>
      </div>
    </div>
  );
}

export default VistaDeConfiServicio;
