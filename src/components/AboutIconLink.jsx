import {FaQuestion} from "react-icons/fa";
import {Link} from "react-router-dom";

function AboutIconLink(props) {
    return (
        <div className={'about-link'}>
            <Link to={{pathname: '/about', search: '?sort=name', hash: '#hlbessa'}}>
                <FaQuestion size={30}/>
            </Link>
        </div>
    );
}

export default AboutIconLink;