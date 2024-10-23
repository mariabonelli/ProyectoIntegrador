import "./CardStyle.css";
import Button from "../Button/Button";
("../Button/Button");

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
