import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SVG from '../components/SVG'


function Header() {
    return (
        <header className="header">
            <Image alt={`richard guilliams logo`} className="logo" width={150} height={150} src="/img/logo.png"/>
            <h1>Richard Guilliams</h1>
            <FullNav/>
            <IconNav/>
        </header>
    );
}

function FullNav(){
    return(
        <nav className={`nav-hidden`}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link className="button_2 button_3" href="/contact">Contact</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    )
}

function IconNav(){
    return(
        <div className="dropdown">
            <button className="dropdown-toggle">
                <SVG className={`menu__icon`} viewBox={`0 0 448 512`} path={`M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z`}/>
            </button>
            <ul className="dropdown-menu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link className="button_2 button_3" href="/contact">Contact</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
      </div>       
    )
}

export default Header;  