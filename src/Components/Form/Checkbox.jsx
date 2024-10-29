import { useId } from "react";
import "./FormStyle.css";
import { useState } from "react";

function Checkbox({ valor, className }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
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
