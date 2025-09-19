import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/bigbas.css"
let Navbar=()=>
     {
   
        return (
            <>
                <nav className="navbar navbar-dark">
                    <div className="container ">
                        <Link to="/" className='navbar-brand'>
                        <i className='fa fa-shopping-cart ' />
                        BigBasket
                        </Link>
                        <ul className='navbar-nav me-auto  list-group-horizontal '>
                            <li  className='nav-item '>
                                <Link to="/" className='nav-link text-white hover'> Home </Link>
                            </li>
                            <li  className='nav-item '>
                                <Link to="/product" className='nav-link text-white hover'> Product </Link>
                            </li>
                            
                        </ul>
                        <ul className='navbar-nav list=group-horizontal'>
                            <li className='new-item '>
                                <Link to='/productdetail' className='text-light nav-link'>Admin</Link>
                            </li>
                        </ul>
                    </div>

                </nav>
            </>
        );
    
}

export default Navbar;




