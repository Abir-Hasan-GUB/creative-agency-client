import React from 'react';
import Banner from '../Banner/Banner';
import BrandLogo from '../BrandLogo/BrandLogo';
import OurWorks from '../OurWorks/OurWorks';
import Service from '../Service/Service';

const MainHome = () => {
    return (
        <main>
        <Banner></Banner>
        <BrandLogo></BrandLogo>
        <Service></Service>
        <OurWorks></OurWorks>
        </main>
    );
};

export default MainHome;