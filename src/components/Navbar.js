import "./Navbar.css"

import { NavLink } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";

const Navbar = () => {

    
  return (
    <AnimatedPage>
        <nav id="nav">
            <h3>Leonardo Oliveira</h3>
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
            </ul>
        </nav>
        </AnimatedPage>
  )
}

export default Navbar