import "./Navbar.css"

import { NavLink } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";

import logo from './react.png'

const Navbar = () => {

    
  return (
    <AnimatedPage>
        <nav id="nav">
        <div><img src={logo} alt="logo" /></div><p className="title"><b>Leonardo Oliveira</b></p>
            <ul>
                <li className="links-nav">
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li className="links-nav">
                    <NavLink to="/projects">
                        Projetos
                    </NavLink>
                </li>
                <li className="links-nav">
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