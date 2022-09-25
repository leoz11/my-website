import "./Navbar.css"

import { NavLink } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";

import logo from './react.png'

const Navbar = () => {

    
  return (
    <AnimatedPage>
        <nav id="nav">
        <img src={logo}alt="react"/><p><b>Leonardo Oliveira</b></p>
            <ul className="links-nav">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        Projetos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills">
                        Skills
                    </NavLink>
                </li>
            </ul>
        </nav>
        </AnimatedPage>
  )
}

export default Navbar;