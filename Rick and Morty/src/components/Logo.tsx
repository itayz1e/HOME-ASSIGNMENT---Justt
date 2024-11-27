import "../style/Logo.scss"
import logo from "../assets/images/DALL·E IA.webp";
const Logo = () => {
  return (
    <div className="logo">
      <img className="image" src={logo} alt="" />
    </div>
  )
}

export default Logo
