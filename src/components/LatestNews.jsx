import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-orange-50 p-2 mt-3">
            <button className="bg-red-700 text-white p-3 py-2">Latest</button>
           <Marquee pauseOnHover={true} speed={100} className="space-x-2">
            <Link to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            <Link to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            <Link to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;