import "../Button/ButtonStyle.css";

export default function FormControl({ children, handleFormSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(event);
  };
  return (
    <div className="form_control">
      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
}
