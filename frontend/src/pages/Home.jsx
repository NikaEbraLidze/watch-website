import Header from "../components/Header-components/Header";
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import WhoWeAre from '../components/WhoWeAre';
import Catalog from '../components/Catalog';
import "../assets/style/style.css";


export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <WhoWeAre />
      <Catalog />
      <Footer />
    </>
  )
}
