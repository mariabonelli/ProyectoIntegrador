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
    <div className="container_file_uploader">
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
      <button className="btn_file_upload" onClick={handleUpload}>
        <svg
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.048"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M19.3517 7.61665L15.3929 4.05375C14.2651 3.03868 13.7012 2.53114 13.0092 2.26562L13 5.00011C13 7.35713 13 8.53564 13.7322 9.26787C14.4645 10.0001 15.643 10.0001 18 10.0001H21.5801C21.2175 9.29588 20.5684 8.71164 19.3517 7.61665Z"
              fill="#ffffff"
            ></path>{" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V13.5629C22 12.6901 22 12.0344 21.9574 11.5001H18L17.9051 11.5001C16.808 11.5002 15.8385 11.5003 15.0569 11.3952C14.2098 11.2813 13.3628 11.0198 12.6716 10.3285C11.9803 9.63726 11.7188 8.79028 11.6049 7.94316C11.4998 7.16164 11.4999 6.19207 11.5 5.09497L11.5092 2.26057C11.5095 2.17813 11.5166 2.09659 11.53 2.01666C11.1214 2 10.6358 2 10.0298 2C6.23869 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22ZM9.01296 12.9528C8.72446 12.6824 8.27554 12.6824 7.98704 12.9528L5.98704 14.8278C5.68486 15.1111 5.66955 15.5858 5.95285 15.888C6.23614 16.1901 6.71077 16.2055 7.01296 15.9222L7.75 15.2312L7.75 18.5C7.75 18.9142 8.08579 19.25 8.5 19.25C8.91421 19.25 9.25 18.9142 9.25 18.5L9.25 15.2312L9.98704 15.9222C10.2892 16.2055 10.7639 16.1901 11.0472 15.888C11.3305 15.5858 11.3151 15.1111 11.013 14.8278L9.01296 12.9528Z"
              fill="#ffffff"
            ></path>{" "}
          </g>
        </svg>
        <span>Subir Archivo</span>
      </button>
    </div>
  );
}

export default Upload;
