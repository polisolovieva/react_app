import React, {useContext, useState} from 'react';
import Crud from "../../services/crud.service";
import AuthContext from "../../context/context";

const Login = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const [values, setValues] = useState({login:"", password:""})
    const [login,setLogin] = useState(false)

    const onChange = (e) => {
        const field = e.target.id;
        setValues({...values,[field]: e.target.value})
    }

    const loginUser = () => {

    }

    return (
        <form className="container mt-3 col-4">
            <div className="mb-3">
                <label htmlFor="login" className="form-label">Email address</label>
                <input type="email"
                       className="form-control"
                       id="login"
                       aria-describedby="emailHelp"
                       onChange={onChange}
                />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"
                       className="form-control"
                       id="password"
                       onChange={onChange}
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox"
                       className="form-check-input"
                       id="exampleCheck1"
                       onChange={onChange}
                />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={loginUser}>Submit</button>
        </form>
    );
};

export default Login;