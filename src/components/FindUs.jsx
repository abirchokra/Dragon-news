import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div className="mt-6">
            <h2 className="font-semibold">Find Us On</h2>
            <div className="flex flex-col  ">
                <button className="btn border border-b-gray-300 justify-start py-4"><FaFacebook />Facebook</button>
                <button className="btn border border-b-gray-300 justify-start py-4"><FaTwitter />Twitter</button>
                <button className="btn border border-b-gray-300 justify-start py-4"><FaInstagram />Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;