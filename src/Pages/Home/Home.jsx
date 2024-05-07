import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import './Home.css';
import Collection from "../../Components/Collection/Collection";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import Collection2 from "../../Components/Collection2/Collection2";
import Collection3 from "../../Components/Collection3/Collection3"
import Collection4 from "../../Components/Collection4/Collection4";
import About from "../About/About";
import Footer from "../../Components/Footer/Footer";
import Whatsapp from "../../Components/Whatsapp/Whatsapp";



function Home(){
    return(
        <div>
        <Header/>
        <Banner/>
        <Categories/>
        <Collection/>
        <Collection2/>
        <BannerSlider/>
        <Collection3/>
        <Collection4/>
        <About/>
        <Footer/>
        <Whatsapp/>
       </div>

    );

}

export default Home;