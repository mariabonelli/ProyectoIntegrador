import { useId } from "react";
import "./FormStyle.css";

function InputField({
  outlined,
  handleChange,
  name,
  placeholder,
  type,
  required,
  value,
}) {
  const id = useId();
  return (
    <>
      <div className={outlined ? "textfield texfield_outlined" : "textfield"}>
        <input
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
        />
        <label htmlFor={id}>{placeholder}</label>
      </div>
    </>
  );
}

export default InputField;
