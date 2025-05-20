import { Link } from 'react-router-dom';
import company from "../images/NEcompany.jpg";

export default function Catalog() {
    return (<>
        <section className="catalog">
            <h1>WHAT WE 
                <br /> OFFER?</h1>

            <div className="catalog-row">

                <div className="left-catalog">
                <div className="watch-img">
                    <Link to="/watches#filter"><img src={company} alt="NEwatch" /></Link>
                </div>
                <Link to="/watches#filter"><h2>Luxury Watches</h2></Link>
                <p>What's up with this episode? Curious listeners want to know, so go ahead and give them a rundown here.
                    What's up with this episode? Curious listeners
                </p>
                </div>

                <div className="rights-catalog">

                <div className="catalog-items">
                    <Link to="/watches#filter"><div><img src={company} alt="NEwatch" /></div></Link>
                    <Link to="/watches#filter"><h2>Luxury Watches</h2></Link>
                    <p>What's up with this episode? Curious listeners want to know, so go ahead and give them a rundown here.
                    What's up with this episode? Curious listeners
                    </p>
                </div>

                <div className="catalog-items">
                    <Link to="/watches#filter"><div><img src={company} alt="NEwatch" /></div></Link>
                    <Link to="/watches#filter"><h2>Luxury Watches</h2></Link>
                    <p>What's up with this episode? Curious listeners want to know, so go ahead and give them a rundown here.
                    What's up with this episode? Curious listeners
                    </p>
                </div>

                <div className="catalog-items">
                    <Link to="/watches#filter"><div><img src={company} alt="NEwatch" /></div></Link>
                    <Link to="/watches#filter"><h2>Luxury Watches</h2></Link>
                    <p>What's up with this episode? Curious listeners want to know, so go ahead and give them a rundown here.</p>
                </div>

                </div>
            </div>
            <Link to="/watches#filter" className='see-more'>SEE MORE...</Link>
        </section>
    </>);
}



