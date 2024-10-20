import '../css/navbar.css'

const handleClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const dropdown = document.querySelector(".dropdownMenu");

    if(document.body.style.overflow === "hidden"){
        document.body.style.overflow = "auto";
    }
    else{
        document.body.style.overflow = "hidden";
    }

    // Toggle the 'active' class on both the hamburger and dropdown menu
    hamburger.classList.toggle("active");
    dropdown.classList.toggle("active");
}

const Navbar = () => {
    return (  
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
                    <a className="navLinks" href="#" class="active">Home</a>
                </li>
                <li className = "navLinksLIDD">
                    <a className="navLinks" href="#" class="active">About Us</a>
                </li>
                <li className = "navLinksLIDD">
                    <a className="navLinks" href="#" class="active">Memorial</a>
                </li>
                <li className = "navLinksLIDD">
                    <a className="navLinks" href="#" class="active">Donate</a>
                </li>
            </ul>
            </div>
            <ul className="navLinksUL">
                <li className = "navLinksLI">
                    <a className="navLinks" href="#" class="active">Home</a>
                </li>
                <li className = "navLinksLI">
                    <a className="navLinks" href="#" class="active">About Us</a>
                </li>
                <li className = "navLinksLI">
                    <a className="navLinks" href="#" class="active">Memorial</a>
                </li>
                <li className = "navLinksLI">
                    <a className="navLinks" href="#" class="active">Donate</a>
                </li>
            </ul>
            <div className='logoContainer'>
                <h1>The Mason Bradley<br></br> Holmberg Foundation</h1>
                <div className='logo'></div>
            </div>
        </nav>

    );
}
 
export default Navbar;