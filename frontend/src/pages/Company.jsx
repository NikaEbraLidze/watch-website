import '../assets/style/company.css';
import Header from '../components/Header-components/Header';
import Footer from '../components/footer';
import SecondaryHeading from '../components/SecondaryHeading';

export default function Company(){
    return(<>
    <Header />
        <SecondaryHeading />

        <section className="section" id="history">
            <h2 style={{color: 'red'}}>Company doesn't exist</h2>

            <h2>Company History</h2>
            <p>NEwatch was founded in 1998 in Tbilisi, Georgia by engineer and watch enthusiast <strong>Nikoloz Ebralidze</strong>. What started as a one-man workshop in an old basement grew into a refined craft, blending Swiss mechanisms with Georgian artistry. His early pieces gained recognition for their uniqueness and accuracy, quickly becoming a beloved secret among collectors.</p>
            <p>In 2010, EBRALIDZE TIME made its international debut at Baselworld with the limited "Heritage" collection. Today, our timepieces are sold across Europe and Asia and are one of the rare luxury brands proudly produced in Georgia.</p>
        </section>

        <section className="section" id="mission">
            <h2>Our Mission</h2>
            <p><em>"Respecting time is about mastering the detail."</em></p>
            <p>Our mission is to craft timepieces that are not just precise instruments but meaningful expressions of style, heritage, and individuality. We are committed to combining tradition with innovation, honoring the soul of mechanical watchmaking.</p>
        </section>

        <section className="section" id="vision">
            <h2>Our Vision</h2>
            <p>By 2030, we aim for EBRALIDZE TIME to become the leading premium watch brand in Eastern Europe. We believe that slow, quality-focused production is the future of luxury in a fast-paced world.</p>
            <p>We’re building a legacy of craftsmanship, community, and conscious creation.</p>
        </section>

        <section className="section" id="why">
            <h2>Why Choose EBRALIDZE TIME?</h2>
            <ul>
                <li>🇬🇪 Designed and Assembled in Georgia, with Swiss movements</li>
                <li>⚙️ Unique fusion of heavy metallurgy and minimalist design</li>
                <li>🧪 Individually tested mechanisms for unmatched precision</li>
                <li>🌿 Ethically responsible, community-driven production</li>
                <li>🔒 Limited edition collections — never mass-produced</li>
            </ul>
        </section>

    <Footer />
    </>)
}