import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';
import Qzone from '../Qzone';

const Right = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default Right;