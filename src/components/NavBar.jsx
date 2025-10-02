import CartWidget from "./CartWidget";
import Logo from "../assets/logo.webp";
import style from "./NavBar.module.css";
import '@fontsource/poppins/400.css'; 
import '@fontsource/poppins/700.css'; 

const NavBar = () => {
    return (
        <nav className={style.navBar}>
            <img className={style.logo} src={Logo} alt="Logo Crucial Sin" />
            <ul className={style.navLinks}>
                <li><a className={style.links} href="#">Inicio</a></li>
                <li><a className={style.links} href="#">Productos</a></li>
                <li><a className={style.links} href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;