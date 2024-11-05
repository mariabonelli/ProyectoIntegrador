import "./UploadStyle.css";
import "../Form/FormStyle.css";
import { useState } from "react";
import UploadIcon from "./UploadIcon";
import axios from "axios";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [error, setError] = useState("");

  const userid = JSON.parse(localStorage.getItem("user"));

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
  const handleUpload = async () => {
    if (!selectedFile) {
      setError("No se seleccionó ningún archivo");
      return;
    }
    /*Envío de data al backend*/
    console.log("Archivo: ", selectedFile);
    /* setSelectedFile(null);
    setFilePreview(null); */

    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const response = await axios.post(
        `http://localhost:8080/api/files/upload/usuario/${userid.id}`,
        formData,
        {
          header: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("file succesfull: ", response.data);
      setSelectedFile(null);
      setFilePreview(null);
    } catch (error) {
      console.log("Error al subir archivo: ", error);
    }
  };

  /*Gestionador de arrastre*/

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && validateFileType(file)) {
      setSelectedFile(file);
      setError("");
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
      setError("El tipo de archivo no es válido");
      setSelectedFile(null);
      setFilePreview(null);
    }
  };

  return (
    <div className="container_file_uploader">
      <h2>Arrastra y suelta </h2>
      <br />
      <h3>O sube un archivo</h3>
      <div
        className="file-upload-container"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
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
        <span>Enviar Archivo </span>
      </button>
    </div>
  );
}

export default Upload;
