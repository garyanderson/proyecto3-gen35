import fondo from "/images/fondo.jpg"
import RMImage from "/images/RMImage.png"
import RMTitulo from "/images/RMTitulo.png"
import "../styles/Header.css"

const Header = () => {
  return (
    <div className="container-images">
        <img className="fondo" src={fondo} alt="" />
        <img className="image main" src={RMImage} alt="" />
        <img className="image title" src={RMTitulo} alt="" />
    </div>
  )
}

export default Header