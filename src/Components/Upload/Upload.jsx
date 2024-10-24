import "./UploadStyle.css";
import { useState } from "react";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [error, setError] = useState("");

  /*Gestionador de selección de archivos*/
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    /*Validación del tipo de archivo*/
    if (file && validateFileType(file)) {
      setSelectedFile(file);
      setError("");
      /*Mostrar vista previa si el archivo es una imagen*/
      if (file.type.startsWith("image/")) {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          setFilePreview(fileReader.result);
        };
        fileReader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    } else {
      setError("El tipo de archivo no es valido");
      setSelectedFile(null);
      setFilePreview(null);
    }
  };

  /*Validación de tipo de archivo*/
  const validateFileType = (file) => {
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ];
    return allowedTypes.includes(file.type);
  };

  /*Gestionador de subida de archivos */
  const handleUpload = () => {
    if (!selectedFile) {
      setError("No se seleccionó ningún archivo");
      return;
    }
    /*Envío de data al backend*/
    console.log("Archivo: ", selectedFile);
    /* setSelectedFile(null);
    setFilePreview(null); */
  };

  return (
    <div>
      <h2>Carga de Archivos</h2>
      <input
        type="file"
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png,.pdf"
      ></input>
      <span>{error && error}</span>
      {filePreview && (
        <div>
          <img src={filePreview} alt="File Preview" />
        </div>
      )}
      {selectedFile && selectedFile.type === "Application/pdf" && (
        <p>{selectedFile.name}</p>
      )}
      <button onClick={handleUpload}>Subir Archivo</button>
    </div>
  );
}

export default Upload;
