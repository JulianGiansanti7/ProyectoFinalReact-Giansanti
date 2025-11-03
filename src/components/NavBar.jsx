import CartWidget from "./CartWidget";
import Logo from "../assets/logo.webp";
import style from "./NavBar.module.css";
import '@fontsource/poppins/400.css'; 
import '@fontsource/poppins/700.css'; 
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.navBar}>
            <img className={style.logo} src={Logo} alt="Logo Crucial Sin" />
            <ul className={style.navLinks}>
                <li><NavLink to="/" className={style.links} href="#">Inicio</NavLink></li>
                <li><NavLink to="/products" className={style.links} href="#">Productos</NavLink></li>
                <li><NavLink to="/contact" className={style.links} href="#">Contacto</NavLink></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;