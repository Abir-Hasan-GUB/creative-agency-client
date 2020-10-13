import React from 'react';
import Banner from '../Banner/Banner';
import BrandLogo from '../BrandLogo/BrandLogo';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import OurWorks from '../OurWorks/OurWorks';
import Service from '../Service/Service';

const MainHome = () => {
    return (
        <main>
        <Banner></Banner>
        <BrandLogo></BrandLogo>
        <Service></Service>
        <OurWorks></OurWorks>
        <ClientsFeedback></ClientsFeedback>
        <Footer></Footer>
        </main>
    );
};

export default MainHome;