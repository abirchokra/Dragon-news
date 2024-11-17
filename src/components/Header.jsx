
import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div>
            <div className='mt-4 text-center flex flex-col justify-center items-center space-y-2'>
                <img className='w-[400px]' src={logo} alt="" />
                <p className='text-gray-400 '>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
        </div>
    );
};

export default Header;