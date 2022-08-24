import "./index.scss";
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        < header className="pb-5 header" >
            <nav className="navbar navbar-expand-md">
                {/* Brand */}
                <a className="navbar-brand" href="#">
                    <img className=" img__logo" src="./images/kisspng-film-cinema-logo-5af2add6c10105.9613806115258536547906-removebg-preview.png" alt="logo" />
                </a>
                {/* Toggler/collapsibe Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-4 nav__li">
                            <a className="nav-link nav__header active" onClick={() => navigate('/')}>Home</a>
                        </li>
                        <li className="nav-item mr-4 nav__li">
                            <a className="nav-link nav__header" href="#">Contact</a>
                        </li>
                        <li className="nav-item mr-4 nav__li">
                            <a className="nav-link nav__header" href="#">News</a>
                        </li>
                        <li className="nav-item mr-4 nav__li">
                            <a className="nav-link nav__header" href="#">Works</a>
                        </li>
                    </ul>
                </div>
                <form className="form-inline" action="/action_page.php">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
            </nav>
            {/* Login and Logout buttons  */}
            <div className="m-auto">
                <div className="row btn__display">
                    <h1 className="m-0">Hello Bà Dà</h1>
                    <button className="btn btn-success m-0">Login</button>
                    <button className="btn btn-danger m-0">Logout</button>
                </div>
            </div>
        </header >
    );
}
