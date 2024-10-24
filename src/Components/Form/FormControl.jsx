export default function FormControl({ children, handleFormSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(event);
  };
  return (
    <div className="form_control">
      <form onSubmit={handleSubmit}>
        {children}
        <button type="submit">Enviar formulario</button>
      </form>
    </div>
  );
}
