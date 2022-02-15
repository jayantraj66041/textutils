import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function NavBar(props) {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">{props.about}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

NavBar.propTypes = {
    title: propTypes.string.isRequired,
    about: propTypes.string
}

NavBar.defaultProps = {
    title: "Title",
    about: "About Us"
}