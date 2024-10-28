import { useId } from "react";
import "./FormStyle.css";

function TextArea({
  outlined,
  handleChange,
  name,
  rows,
  placeholder,
  required,
}) {
  const id = useId();
  return (
    <>
      {/* evaluacion ejemplo 1!=1 ?evualiacion verdadera:evaluacion falsa */}
      <div className={outlined ? "textfield textfield_outlined" : "textfield"}>
        <textarea
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          name={name}
          id={id}
          rows={rows}
          placeholder={placeholder}
          required={required}
          /* style={{marginRight: spacing + 'em'}} */
          style={{ resize: "none" }}
        ></textarea>
        <label htmlFor={id}>{placeholder}</label>
      </div>
    </>
  );
}
export default TextArea;
