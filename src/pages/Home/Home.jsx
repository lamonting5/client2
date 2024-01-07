import React from 'react';

import BestSeller from "./BestSeller.jsx";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import Transition from "../../transition.jsx";
import HomeProducts from "./HomeProducts.jsx";
import Masonry from "./Masonry.jsx";
const Home = () => {
    return (
        <div
        >
            <HeroSection/>
            <FeaturedProducts type={'trending'}/>
            <HomeProducts/>
            <BestSeller/>
            <Masonry/>
        </div>
    );
};

export default Transition(Home);