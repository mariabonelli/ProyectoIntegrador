import "./CardStyle.css";
import Button from "../Button/Button";
("../Button/Button");

function Card({ title, text, onClose }) {
  return (
    <div className="card" style={{ height: "100%", maxHeight: "100%" }}>
      <div className="card_title">{title}</div>
      <div className="card_text">{text}</div>
      <div className="card_section">
        <Button variant="btn_small btn_secondary_lighten" handleClick={onClose}>
          Cerrar
        </Button>
      </div>
    </div>
  );
}
export default Card;
