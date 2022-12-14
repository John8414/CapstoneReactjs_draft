import "./index.scss";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { IconLogo } from "../icon";
import { useDispatch, useSelector } from "react-redux";
import { USER_INFO_KEY } from "../../constants/common";
import { setUserInfoAction } from "../../store/actions/user.action";

export default function Header() {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem(USER_INFO_KEY);
        dispatch(setUserInfoAction(null));
        navigate("/");
    };
    return (
        < header className="pb-5 header" >
            <nav className="navbar navbar-expand-md">
                {/* Brand */}
                <a className="navbar-brand"
                    onClick={() => navigate('/')}
                >
                    <IconLogo />
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
                            <a className="nav-link nav__header" target="_blank" href="https://www.facebook.com/hthanh711">Contact</a>
                        </li>
                        <li className="nav-item mr-4 nav__li">
                            <a className="nav-link nav__header" target="_blank" href="https://kenh14.vn/">News</a>
                        </li>
                        <li className="nav-item mr-4 nav__li">
                            <a className="nav-link nav__header" target="_blank" href="https://www.vietnamworks.com/it-software-jobs-i35-en?utm_source=SEM&utm_medium=MA&utm_campaign=SEM_IT&utm_content=all&gclid=CjwKCAjwx7GYBhB7EiwA0d8oexN0aUa5UCZcJDRFy5VU_4-w8KJuHq-vgb5aOO6vZODq4lTzrGB4cxoCtGgQAvD_BwE">Works</a>
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
                    {!userState.userInfo ? (
                        <>
                            <button
                                onClick={() => navigate('/login')}
                                className="btn btn-success m-0">Login
                            </button>
                            <button className="btn btn-danger m-0">Register
                            </button>

                        </>) : (
                        <><h1 className="m-0">Hello B?? {userState.userInfo.hoTen}</h1>
                            <button
                                onClick={handleLogout}
                                className="btn btn-danger m-0">Logout
                            </button>
                        </>
                    )
                    }
                </div>
            </div>
        </header >
    );
}
