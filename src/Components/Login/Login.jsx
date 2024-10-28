import "./LoginStyle.css";
import FormControl from "../Form/FormControl";
import Button from "../Button/Button";


function Login() {
  const handleSubmit = (form) => {
    const formData = new FormData(form);
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log("Datos del formulario:", Object.fromEntries(formData));
  };
  
  
  
  return (
  <div className="login_container">
    <h2 className="tittle_iniciosesion">Inicio de Sesión</h2>
    <FormControl handleSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email"
          placeholder="Correo Electrónico" required />
          </div>
          <div className="form_group">
          <label htmlFor="password"></label>
          <input type="password" id="password" name="password" placeholder="Contraseña" required />
        </div>
        <Button variant="primary">Iniciar Sesión</Button>
          </FormControl>
  </div>
  );
}

export default Login;
