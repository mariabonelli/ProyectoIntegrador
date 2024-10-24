# Documentacion del Componente Card

--Descripcion General

El componente "Card" es un Componente UI que sirve como punto de entrada para otorgar acceso a informacion mas detallada.

Facilita la organizacion de la interfaz y la navegacion entre diferentes secciones sin necesidad de crear multiples ventanas o cuadros de dialogo.

Las "Card" pueden contener informacion de tipo grafico, paneles, botones o etiquetas y tienen una gestion de metodos los cuales permiten mostrar, ocultar o cambiar el contenido.

# Documentacion de Clase CSS

--Descripcion General

Mantiene la informacion oculta de la vista de usuario hasta que se sobrepone el cursor entregando la informacion.

--Conclusion 

Los componentes Card permiten que el usuario tenga acceso visible a la informacion cuando sobreponga el cursor sobre cada Card disponible en la pagina.

--Invocar clase

<Card/>

--Codigo que contiene el componenente Card

function Card({ title, text, section }) {
  return (
    <div className="card">
      {title && <div className="card_title">{title}</div>}
      {text && <div className="card_text">{text}</div>}
      {section && <div className="card_section">{section}</div>}
    </div>
  );
}
export default Card;


--Clase CSS "Card"

.card {
  gap: 15px;
  display: grid;
  background-color: aqua;
  grid-template-rows: 50px auto 50px;
}
.card_title {
  padding: 15px;
  font-weight: bold;
  font-size: 18px;
}
.card_text {
  padding: 15px;
  overflow-y: auto;
  color: #818181;
  font-size: 16px;
}
.card_section {
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 0px 15px 15px 0px;
}





