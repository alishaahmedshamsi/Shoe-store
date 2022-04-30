import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {

  return (
	<nav className='navbar'>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/product"> Product </Link>
	</nav>
  
  );
}

export default NavBar;
