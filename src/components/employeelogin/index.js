import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/auth/action";

const EmployeeLogin = (props) => {

    const [register, setUser] = useState({ username: "", password: "" });
    const handle = (e) => {
        setUser({ ...register, [e.target.name]: e.target.value });
    }
    const f1 = () => {
        console.log("e login");
        if (logstatus.isLoggedIn) {
            window.location.href = "/dashboard"
        }
    }
    const f2 = () => {
        console.log("e logout");
        window.location.href = "/home"
    }
    const logstatus = useSelector(x => {
        return x.Auth;
    });
    console.log(logstatus);
    const dispatch = useDispatch();
    return (
        <div>
            <p> Welcome to my EmployeeLogin</p>
            <div class="container-fluid mt-3">
                <div class="row offset-md-1">
                    <div class="card col-md-6">
                        <div class="row mb-3 mt-1">
                            <label for="username" class="col-sm-2 col-form-label">
                                Name</label>
                            <div class="col-sm-6">
                                <input type="text"
                                    class="form-control"
                                    value={register.username}
                                    onChange={handle}
                                    id="username"
                                    name="username" />
                            </div>
                        </div>
                        <div class="row mb-3 mt-1">
                            <label for="password" class="col-sm-2 col-form-label">
                                password</label>
                            <div class="col-sm-6">
                                <input type="password"
                                    class="form-control"
                                    onChange={handle}
                                    value={register.password}
                                    id="password"
                                    name="password" />
                            </div>
                        </div>
                        <div class="row mb-3 mt-1">
                            <div class="col-md-1 offset-md-3">
                                <button class="btn btn-submit btn-primary"
                                    onClick={e => {
                                        dispatch(login(register));
                                        f1()
                                    }}>
                                    Login</button>
                            </div>
                            <div class="col-md-1 offset-md-3">
                                <button class="btn btn-submit btn-primary"
                                    onClick={e => {
                                        dispatch(logout(register));
                                        f2()
                                    }}>
                                    LogOut</button>
                            </div>
                        </div>
                    </div>
                    <pre>{JSON.stringify(register)}</pre>
                    <div class="row mb-3 mt-1">
                        <div class="col-md-1 offset-md-3">
                            <button class="btn btn-submit btn-primary">
                                status:{logstatus.isLoggedIn ? "true" : "false"}</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default EmployeeLogin;