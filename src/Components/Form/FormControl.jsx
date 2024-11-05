import "../Button/ButtonStyle.css";

export default function FormControl({ children, handleFormSubmit, sinboton }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(event);
  };
  return (
    <div className="form_control">
      <form onSubmit={handleSubmit}>
        {children}
        {!sinboton && (
          <button className="btn" type="submit">
            <span>enviar</span>
          </button>
        )}
      </form>
    </div>
  );
}
