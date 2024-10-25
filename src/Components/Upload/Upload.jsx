import "./UploadStyle.css";
import "../Form/FormStyle.css";
import { useState } from "react";
import UploadIcon from "./UploadIcon";

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
    <div className="container_file_uploader">
      <h2>Carga de Archivos</h2>
      <div className="file-upload-container">
        <input
          className="file-input"
          id="idmyinputfield"
          type="file"
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.png,.pdf"
        ></input>
        <label className="custom-file-upload" htmlFor="idmyinputfield">
          <UploadIcon />
        </label>
        {selectedFile && (
          <div className="file-info">
            <p>
              <strong>File Name:</strong> {selectedFile.name}
            </p>
            <p>
              <strong>File Type:</strong> {selectedFile.type}
            </p>
            <p>
              <strong>File Size:</strong>{" "}
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}
      </div>
      <span>{error && error}</span>
      {filePreview && (
        <div className="container_image_upload">
          <img src={filePreview} alt="File Preview" />
        </div>
      )}
      {selectedFile && selectedFile.type === "Application/pdf" && (
        <p>{selectedFile.name}</p>
      )}
      <button className="btn_file_upload" onClick={handleUpload}>
        <span>
          Subir Archivo <UploadIcon />{" "}
        </span>
      </button>
    </div>
  );
}

export default Upload;
