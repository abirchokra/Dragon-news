import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        if (name.length < 5) {
            setError({ ...error, name: "Must be more then 5 character" })
            return;

        }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log({ name, photo, email, password })
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                updateUserProfile({displayName: name, photoURL: photo}).then(() =>{
                    navigate("/")

                })
                .catch(error =>{
                    console.log(error)

                })
            

            })
            .catch(error => {
                console.log('ERROR', error.message)
            })


    }
    return (
        <div className="flex flex-col justify-center font-poppins">

            <div className="hero bg-base-200 min-h-screen">

                <div className="hero-content flex-col ">
                    <h2 className="text-center text-5xl font-bold">Register Your Account</h2>

                    <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            {
                                error.name && (
                                    <label className="label text-xs text-red-600">
                                        {error.name}

                                    </label>

                                )
                            }
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="photo" className="input input-bordered" required />
                            </div>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className="flex items-center gap-3 text-gray-600"><input type="checkbox" className="checkbox" required />Accept Term & Conditions</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Register</button>
                            </div>
                        </form>
                        <p className="text-center text-gray-700">Already Have An Account? please <Link className="underline text-red-500" to={'/auth/login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
