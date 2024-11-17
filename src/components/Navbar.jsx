import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(import.meta.env.VITE_a )
    return (
        <div className="flex items-center  justify-between my-4">
            <div className="text-xl font-bold">
                {user && user.displayName}

            </div>
            <div className="space-x-8">
                <NavLink className='text-gray-600' to={'/'}>Home</NavLink>
                <NavLink className='text-gray-600' to={'/about'}>About</NavLink>
                <NavLink className='text-gray-600' to={'/career'}>Career</NavLink>
            </div>
            <div className="flex gap-2">
                {
                    user && user?.email ? (<div><img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" /></div> ):  (<img src={userIcon} alt="" />)
                }
               
                {
                    user && user?.email ?
                       <button onClick={logOut} className="btn btn-neutral rounded-none">Log out</button>
                        :
                        <Link to={'/auth/login'} className="btn btn-neutral rounded-none">Login</Link>
                }


            </div>

        </div>
    );
};

export default Navbar;