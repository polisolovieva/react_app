import React, {useContext, useState} from 'react';
import Crud from "../../services/crud.service";
import AuthContext from "../../context/context";
import http from "../../http"

const Login = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const [values, setValues] = useState({username:"", password:""})
    const [login,setLogin] = useState(false)

    const onChange = (e) => {
        const field = e.target.id;
        setValues({...values,[field]: e.target.value})
    }

    const loginUser = (e) => {
        e.preventDefault();
        http.post('https://fakestoreapi.com/auth/login',values).then((res)=>{
            setAuth(true)
            console.log(res.data);
        }).catch((e) => console.log(e));
    }

    return (
        <form className="container mt-3 col-4">
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Email address</label>
                <input type="text"
                       className="form-control"
                       id="username"
                       aria-describedby="emailHelp"
                       onChange={onChange}
                />
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
            <button className="btn btn-primary" onClick={loginUser}>Submit</button>
        </form>
    );
};

export default Login;