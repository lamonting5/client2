import React from 'react';
import Banner from "./banner.jsx";
import Category from "./category.jsx";
import BestSeller from "./BestSeller.jsx";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedProducts type={'trending'}/>
            <Category/>
            <FeaturedProducts type={'featured'}/>
            <BestSeller/>
        </div>
    );
};

export default Home;