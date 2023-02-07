import Card from "../Product/CardIndex";
import React from "react";

const trendingProduct = () => {
    const dataTrendingProduct = [
        {
            img: 'http://localhost:3000/img/trending/trend-1.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'The Seven Deadly Sins: Wrath of the Gods'
        }, {
            img: 'http://localhost:3000/img/trending/trend-2.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien'
        }, {
            img: 'http://localhost:3000/img/trending/trend-3.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Shingeki no Kyojin Season 3 Part 2'
        }, {
            img: 'http://localhost:3000/img/trending/trend-4.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Fullmetal Alchemist: Brotherhood'
        }, {
            img: 'http://localhost:3000/img/trending/trend-5.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Shiratorizawa Gakuen Koukou'
        }, {
            img: 'http://localhost:3000/img/trending/trend-6.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Code Geass: Hangyaku no Lelouch R2'
        },
    ]

    return(
        <>
            <div className="trending__product">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="section-title">
                            <h4>Trending Now</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="btn__all">
                            <a href="#" className="primary-btn">View All <span className="arrow_right" /></a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        dataTrendingProduct.map(dataTrendingProductDetail => {
                            return (
                                <Card dataProductDetail={dataTrendingProductDetail} key={dataTrendingProductDetail._key}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default trendingProduct