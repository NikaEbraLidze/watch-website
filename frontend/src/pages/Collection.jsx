import React from "react";
import Header from "../components/Header-components/Header";
import Footer from '../components/footer';
import '../assets/style/watches.css';
import Filter from "../components/Filter";
import WelcomeCollection from "../components/Welcome-collection";

export default function Collection(){
    return(<>
        <Header />
        <WelcomeCollection />
        <Filter />
        <Footer />
    </>);
};