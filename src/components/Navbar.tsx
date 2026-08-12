import "./Navbar.css";

const Navbar = () => {
    return(

        <header className="navbar">
            <div className="logo">
                KARMPAS
            </div>

            <nav>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>

    );
};

export default Navbar;