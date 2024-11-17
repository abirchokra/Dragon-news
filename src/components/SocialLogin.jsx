
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-2">Login With</h2>
            <div className="flex flex-col gap-2">
                <button className="btn w-full"> <FaGithub className="w-5 h-6" />Login with GitHub</button>
                <button className="btn w-full">  <FaGoogle className="w-5 h-6" />Login with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;