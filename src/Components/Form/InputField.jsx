import "./FormStyle.css";

function InputField() {
  return (
    <>
      <div className="textfield">
        <input name="nombre" id="nombre" type="text" placeholder="Nombre" />
        <label htmlFor="nombre">Nombre</label>
      </div>
    </>
  );
}

export default InputField;
