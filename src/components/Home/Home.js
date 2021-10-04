// Home Component
import React from 'react';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import ContactBanner from '../ContactBanner/ContactBanner';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Article></Article>
            <ServicesHome></ServicesHome>
            <ContactBanner></ContactBanner>
        </div>
    );
};

export default Home;