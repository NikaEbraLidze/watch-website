import Header from "../components/Header-components/Header";
import Footer from '../components/footer';
import '../assets/style/detail.css';
import WatchInfo from "../components/WatchInfo";
import SecondaryHeading from "../components/SecondaryHeading";
import { useParams } from 'react-router-dom';

export default function Collection(){
    const { id } = useParams();

    return(<>
        <Header />
        <SecondaryHeading />
        <WatchInfo id={ id } />
        <Footer />
    </>);
};