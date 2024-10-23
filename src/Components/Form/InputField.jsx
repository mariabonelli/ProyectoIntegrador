import "./FormStyle.css";

function InputField({ outlined }) {
  return (
    <>
      <div className={!outlined ? "outlined" : "textfield texfield_outlined"}>
        <input name="nombre" id="nombre" type="text" placeholder="Nombre" />
        <label htmlFor="nombre">Nombre</label>
      </div>
    </>
  );
}

export default InputField;
