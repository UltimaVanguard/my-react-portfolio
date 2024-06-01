import { NavLink } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <Navbar
            // builds an array of links
            links={[
                <NavLink key={1} className="nav-link" activeclassname="active" to="/">
                    About Me
                </NavLink>,
                <NavLink key={2} className="nav-link" activeclassname="active" to="/portfolio">
                    Portfolio
                </NavLink>,
                <NavLink key={3} className="nav-link" activeclassname="active" to="/contact">
                    Contact Info
                </NavLink>,
                <NavLink key={4} className="nav-link" activeclassname="active" to="/resume">
                    Resume
                </NavLink>,
            ]}
        />
    )
}