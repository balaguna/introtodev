import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '.C:\Users\Murali\FSAssignment3\introtodev\ReactProject\components\navbar.css';
import { Button } from "./Button";


function Navbar() {
const [click, setClick] = useState(false);
const handleClick = () ==> setClick(!click);
const closeMobileMenu = () =>setClick(false);

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    } else {
        setButton(true);
    }
};

useEffect(){[

]}

window.addEventListener('resize', showButton);

return (
        <>
        <nav className="navbar">
<div className="navbar-container">
    <Link to="/" className="navbar-logo">

    </Link>
    <div className='menu-icon' onClick={handleClick}>

    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
<li className='nav-item'>
    <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
        Home
    </Link>
</li>
<li className='nav-item'>
    <Link to='/Shakespeare' className='nav-links' onClick={closeMobileMenu}>
        Shakespeare
    </Link>
    
</li>
    </ul>
{button && <Button buttonStyle='btn--mobile'>Books</Button>}

    </div>
        </nav>
    )
}