import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SliderDetail from "./SliderDetail";

const Slider = () => {
    const dataSlider = [
        {
            img: 'http://localhost:3000/img/hero/hero-1.jpg',
            name: 'Fate / Stay Night: Unlimited Blade Works',
            categories: 'Adventure',
            text: 'After 30 days of travel across the world...'
        },
        {
            img: 'http://localhost:3000/img/hero/hero-1.jpg',
            name: 'Fate / Stay Night: Unlimited Blade Works',
            categories: 'Adventure',
            text: 'After 30 days of travel across the world...'
        },
        {
            img: 'http://localhost:3000/img/hero/hero-1.jpg',
            name: 'Fate / Stay Night: Unlimited Blade Works',
            categories: 'Adventure',
            text: 'After 30 days of travel across the world...'
        },
    ]

    const options = {
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    };

    return (
        <>
            <section className="hero">
                <div className="container">
                    <OwlCarousel className="owl-carousel owl-theme" {...options}>
                        {
                            dataSlider.length === 0 ?
                                <img className="img" src={'http://localhost:3000/img/hero/hero-1.jpg'} alt=""/>
                            :
                                dataSlider.map(dataSliderDetail => {
                                    return(
                                    <SliderDetail dataSliderDetail={dataSliderDetail} key={dataSliderDetail._key}/>
                                )
                            })
                        }
                    </OwlCarousel>

                </div>
            </section>
        </>
    )
}

export default Slider