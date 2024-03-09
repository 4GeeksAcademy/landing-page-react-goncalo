import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <nav className="navbar bg-dark py-4 mt-3">
            <div className="container-fluid">
                <a className="navbar-brand text-light font-small m-auto" href="#">Copyright <FontAwesomeIcon icon={faCopyright} /> Your Website 2018</a>
            </div>
        </nav>
    )
}

export default Footer