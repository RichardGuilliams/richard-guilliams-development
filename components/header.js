import React from 'react';

function Header() {
    return (
        <header className="header">
            <img alt={`richard guilliams logo`} className="logo" src="./img/logo.png"/>
            <h1>Richard Guilliams</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a class="button_2 button_3" href="/contact">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;