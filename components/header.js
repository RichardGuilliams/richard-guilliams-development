import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


function Header() {
    return (
        <header className="header">
            <Image alt={`richard guilliams logo`} className="logo" width={150} height={150} src="/img/logo.png"/>
            <h1>Richard Guilliams</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="button_2 button_3" href="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;  