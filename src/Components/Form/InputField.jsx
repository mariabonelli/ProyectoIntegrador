import "./FormStyle.css";

function InputField({
  outlined,
  handleChange,
  name,
  id,
  placeholder,
  type,
  required,
}) {
  return (
    <>
      <div
        className={
          outlined
            ? "textfield texfield_outlined"
            : "textfield texfield_outlined"
        }
      >
        <input
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
        />
        <label htmlFor={id}>{placeholder}</label>
      </div>
    </>
  );
}

export default InputField;
