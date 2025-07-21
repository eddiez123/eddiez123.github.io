import './Navbar.css';

const Navbar = () => {
    return (
        <header className='header'>
            <nav className="navbar">
                <a href="#intro">Home</a>
                <a href="https://github.com/eddiez123">Projects</a>
                <a href="#aboutme">About Me</a>
                <a href="https://link.space/@edzy">Socials</a>
            </nav>
        </header>
    )
}

export default Navbar;