import { Link } from 'react-router-dom';
import typeLogo from "../images/NEcompany.jpg";

export default function WelcomeCollection(){
return(<>
    <section id="welcome-catalog">
        <h6>NEwatches</h6>

        <div className="catalog-grid">
            <div className="heading">
                <h1>
                    <span className="word">Your</span>
                    <span className="decoration word">Perfect</span>
                    <span className="decoration word">Moment</span>
                    <span className="word">Starts</span>
                    <span className="word">Here</span>
                </h1>
            </div>

            <div className="watchnames classic">
                <Link to="/watches#filter"><img src={typeLogo} alt="Classic" />
                <h2>Classic</h2></Link>
            </div>

            <div className="watchnames sport">
                <Link to="/watches#filter"><img src={typeLogo} alt="Sport" />
                <h2>Sport</h2></Link>
            </div>

            <div className="watchnames automatic">
                <Link to="/watches#filter"><img src={typeLogo} alt="Automatic" />
                <h2>Automatic</h2></Link>
            </div>

            <div className="watchnames smartwatch">
                <Link to="/watches#filter"><img src={typeLogo} alt="Smartwatch" />
                <h2>Smartwatch</h2></Link>
            </div>

            <div className="watchnames quartz">
               <Link to="/watches#filter"><img src={typeLogo} alt="Quartz" />
                <h2>Quartz</h2></Link>
            </div>

            <div className="watchnames luxury">
               <Link to="/watches#filter"><img src={typeLogo} alt="Luxury" />
                <h2>Luxury</h2></Link>
            </div>
        </div>
    </section>
</>);
}