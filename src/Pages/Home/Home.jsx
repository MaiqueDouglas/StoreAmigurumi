import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import './Home.css';
import Collection from "../../Components/Collection/Collection";

function Home(){
    return(
        <div>
        <Header/>
        <Banner/>
        <Categories/>
        <Collection/>
       </div>

    );

}

export default Home;