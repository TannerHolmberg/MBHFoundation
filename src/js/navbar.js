import '../css/navbar.css'

import { NavLink } from 'react-router-dom';

const handleClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const dropdown = document.querySelector(".dropdownMenu");

    // Toggle the 'active' class on both the hamburger and dropdown menu
    hamburger.classList.toggle("active");
    dropdown.classList.toggle("active");
}

const handleRedirection = () => {
    const hamburger = document.querySelector(".hamburger");
    const dropdown = document.querySelector(".dropdownMenu");
    hamburger.classList.toggle("active");
    dropdown.classList.toggle("active");
}

const Navbar = () => {
    return (  
        <div className='navbarUnderbar'>
        <nav className="navbar">
            <div className="hamburgerContainer">
            <div className="hamburger" onClick = {handleClick}>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
                </div>
            <div className='dropdownMenu' id="dropdown">
            <ul className="navLinksULDD">
                <li className = "navLinksLIDD">
                    <NavLink onCLick={handleRedirection} className="navLinks" to="/MBHFoundation">Home</NavLink>
                </li>
                <li className = "navLinksLIDD">
                    <NavLink onCLick={handleRedirection} className="navLinks" to="/AboutUs">About Us</NavLink>
                </li>
                <li className = "navLinksLIDD">
                    <NavLink onCLick={handleRedirection} className="navLinks" to="/Memorial">Memorial</NavLink>
                </li>
                <li className = "navLinksLIDD">
                    <a  onCLick={handleRedirection} className="navLinks" href="#">Donate</a>
                </li>
            </ul>
            </div>
            <ul className="navLinksUL">
                <li className = "navLinksLI">
                    <NavLink className="navLinks" to="/MBHFoundation">Home</NavLink>
                </li>
                <li className = "navLinksLI">
                    <NavLink className="navLinks" to="/AboutUs">About Us</NavLink>
                </li>
                <li className = "navLinksLI">
                    <NavLink className="navLinks" to="/Memorial">Memorial</NavLink>
                </li>
                <li className = "navLinksLI">
                    <a className="navLinks" href="#">Donate</a>
                </li>
            </ul>
            <div className='logoContainer'>
                <h1>The Mason Bradley<br></br> Holmberg Foundation</h1>
                <div className='logo'></div>
            </div>
        </nav>
        </div>

    );
}
 
export default Navbar;