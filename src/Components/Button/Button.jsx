import "./ButtonStyle.css";

function Button({ children, variant, handleClick, disabled }) {
  const btnclass = !disabled ? variant : "btn_disabled";

  return (
    <>
      <button
        className={`btn ${btnclass ? btnclass : ""}`}
        onClick={disabled ? undefined : handleClick}
      >
        <span>{children} </span>
      </button>
    </>
  );
}

export default Button;
