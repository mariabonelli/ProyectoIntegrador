import rencalogo from "../../assets/Renca.png";
import coloresrenca from "../../assets/Colores.png";
import "./BannerStyle.css";
function Banner({ infoPage }) {
  return (
    <>
      <div className="banner">
        <div className="banner_icon">
          <img src={rencalogo} alt="ícono" />
        </div>
        <div className="banner_text">
          <span>{infoPage.subtitle}</span>
        </div>
        <img
          className="banner_colores"
          src={coloresrenca}
          alt="Barra de colores"
        />
      </div>
    </>
  );
}

export default Banner;
