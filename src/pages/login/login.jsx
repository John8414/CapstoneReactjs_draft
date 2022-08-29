import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_INFO_KEY } from '../../constants/common';
import { logInApi } from '../../services/user';
import { setUserInfoAction } from '../../store/actions/user.action';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState(
        {
            taiKhoan: "",
            matKhau: "",
        }
    );

    const handleChange = (event) => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        const result = await logInApi(state);
        localStorage.setItem(USER_INFO_KEY, JSON.stringify(result.data.content));
        dispatch(setUserInfoAction(result.data.content));
        navigate("/");
    };
    return (
        <div className="container w-50">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>account</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="taiKhoan"
                        placeholder="Enter account"
                        name="taiKhoan" />
                </div>
                <div className="form-group">
                    <label >password:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="matKhau"
                        placeholder="Enter Password"
                        name="matKhau" />
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
