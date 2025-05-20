import '../assets/style/contact.css';
import ContactForm from '../components/ContactForm';
import Header from "../components/Header-components/Header";
import Footer from '../components/footer';
import SecondaryHeading from "../components/SecondaryHeading";

export default function Contact(){
    return(<>
    <Header />
        <SecondaryHeading />

        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="input-container">
                    <h1>WRITE TO US</h1>
                    <div className="line"></div>
                    <ContactForm />
                </div>

                <div className="contact-info">
                    <h1>Contact Info</h1>
                    <div className="line"></div>
                    <p><strong>Address:</strong> Tbilisi, no exict street</p>
                    <p><strong>Phone:</strong> <a href="tel:+995599123456" style={{color: '#20cd8d'}}>+995 599 123 456</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@newatch.com" style={{color: '#20cd8d'}}>info@newatch.com</a></p>
                    <div className="line"></div>
                    <h3>Work time</h3>
                    <p><strong>Monday-Friday:</strong>10.00-18.00</p>

                    <div className="map-location">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190570.22333851096!2d44.64195104959651!3d41.72786065482655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2z4YOX4YOR4YOY4YOa4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1747331047098!5m2!1ska!2sge" 
                            width="100%" 
                            height="100%" 
                            style={{border: '0'}}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>

    <Footer />
    </>)
}