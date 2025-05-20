import { Link } from 'react-router-dom';
import background from "../images/NEwatchBackground.png";

export default function Welcome(){
    const backgroundImage = {
        backgroundImage: `url(${background})`
    }
    return (<>
            <section id="welcome-section" className="welcome-section" style={backgroundImage}>
                <h6>NEwatches</h6>
                <div className="container-welcome">
                    <h1> Let's get <br/> you on time </h1>
                    <button><Link to="/watches#welcome-catalog">Chose your dream watch</Link></button>
                </div>
            </section>
        </>);
};