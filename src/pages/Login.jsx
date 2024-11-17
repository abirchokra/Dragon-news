import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setError({ ...error, login: err.code });

            })

    }
    return (
        <div className="flex flex-col justify-center font-poppins">

            <div className="hero bg-base-200 min-h-screen">

                <div className="hero-content flex-col ">
                    <h2 className="text-center text-5xl font-bold">Login Your Account</h2>

                    <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                {
                                    error.login && (
                                        <label className="label text-sm text-red-600">
                                            {error.login}


                                        </label>

                                    )
                                }
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Login</button>
                            </div>
                        </form>
                        <p className="text-center text-gray-700">Don't Have An Account? please <Link className="underline text-red-500" to={'/auth/register'}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;