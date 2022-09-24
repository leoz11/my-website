import "./Navbar.css"

import { NavLink } from "react-router-dom";

const Navbar = () => {

    
  return (
        <nav id="nav">
            <h3>Leonardo Oliveira</h3>
            <ul className="links-nav">
                <li>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
  )
}

export default Navbar