import "./ButtonStyle.css";

function Button({ children, variant, handleClick }) {
  return (
    <>
      <button className={`btn ${variant ? variant : ""}`} onClick={handleClick}>
        <span>{children} </span>
      </button>
    </>
  );
}

export default Button;
