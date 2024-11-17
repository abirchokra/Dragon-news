import swiming from '../assets/swimming.png'
import classes from '../assets/class.png'
import playGround from '../assets/playground.png'

const Qzone = () => {
    return (
        <div className=''>
            <h2 className='font-semibold text-start  bg-orange-50 p-2'>Q-Zone</h2>

            <div className='flex flex-col justify-center items-center bg-orange-50'>
                <div>
                    <img src={swiming} alt="" />
                </div>
                <div>
                    <img src={classes} alt="" />
                </div>
                <div>
                    <img src={playGround} alt="" />
                </div>
            </div>


        </div>
    );
};

export default Qzone;