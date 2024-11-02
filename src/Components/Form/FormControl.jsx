import "../Button/ButtonStyle.css";

export default function FormControl({
  children,
  handleFormSubmit,
  disablebutton,
  sinboton,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(event);
  };
  return (
    <div className="form_control">
      <form onSubmit={handleSubmit}>
        {children}
        {!disablebutton && (
          <button className="btn" type="submit">
            <span>enviar</span>
          </button>
        )}
      </form>
    </div>
  );
}
