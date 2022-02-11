import React from 'react';
import propTypes from 'prop-types';

export default function NavBar(props) {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="" className="nav-link">{props.about}</a>
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