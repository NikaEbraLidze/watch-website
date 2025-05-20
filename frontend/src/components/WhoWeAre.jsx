import { Link } from 'react-router-dom';
import company from "../images/NEcompany.jpg";

export default function WhoWeAre() {
    return (<>
            <section className="who-we-are">
                <div className="column left">
                    <h1>WHO WE <br /> ARE?</h1>
                    <img src={company} alt="Watch" />
                </div>
                <div className="column right">
                    <div className="framed-img">
                        <img src={company} alt="Watch display" />
                    </div>
                    <p>
                        NEwatch is a leading brand in watch design, manufacturing, and innovation.
                        With our cutting-edge technology, we give you tomorrow’s timepieces, today!
                    </p>
                </div>
                <Link to="/aboutus#heading">READ MORE...</Link>
            </section>
        </>);
}
