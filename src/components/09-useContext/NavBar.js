import React from 'react';
import{Link, NavLink}from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            
            <Link  to="/" exact className="navbar-brand" >Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink exact to="/" className="nav-link" >Home </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/about" className="nav-link" >about</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/login" className="nav-link" >login</NavLink>
                </li>
                </ul>
            </div>
        </nav>
    )
}
