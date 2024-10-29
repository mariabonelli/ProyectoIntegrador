import { useId } from "react";
import "./FormStyle.css";
import { useState } from "react";

function Checkbox({ valor }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="checkboxfield"
      />
      {valor}
    </label>
  );
}

export default Checkbox;
