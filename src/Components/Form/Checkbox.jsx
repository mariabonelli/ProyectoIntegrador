import { useId } from "react";
import "./FormStyle.css";
import { useState, useEffect } from "react";

function Checkbox({ valor, className, handleChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    handleChange(isChecked);
  }, [isChecked]);
  return (
    <div className="checkbox_group">
      <label className="checkbox_label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={className}
        />
        {valor}
      </label>
    </div>
  );
}

export default Checkbox;
