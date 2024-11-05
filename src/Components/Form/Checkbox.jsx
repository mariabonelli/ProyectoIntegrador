import { useId } from "react";
import "./FormStyle.css";
import { useState, useEffect } from "react";

function Checkbox({ valor, className, handleChange, isChecked }) {
  return (
    <div className="checkbox_group">
      <label className="checkbox_label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className={"checkbox"}
        />
        {valor}
      </label>
    </div>
  );
}

export default Checkbox;
