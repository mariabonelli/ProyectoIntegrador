export default function FormControl({ children, handleFormSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(event.target);
  };
  return (
    <div className="form_control">
      <form onSubmit={handleSubmit}>{children}</form>
      <button type="submit">enviar</button>
    </div>
  );
}
