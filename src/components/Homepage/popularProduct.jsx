import Card from "../Product/CardIndex";
import React from "react";

const popularProduct = () => {
    const dataPopularProduct = [
        {
            img: 'http://localhost:3000/img/popular/popular-1.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Sen to Chihiro no Kamikakushi'
        }, {
            img: 'http://localhost:3000/img/popular/popular-2.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Kizumonogatari III: Reiket su-hen'
        }, {
            img: 'http://localhost:3000/img/popular/popular-3.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Shirogane Tamashii hen Kouhan sen'
        }, {
            img: 'http://localhost:3000/img/popular/popular-4.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Rurouni Kenshin: Meiji Kenkaku Romantan'
        }, {
            img: 'http://localhost:3000/img/popular/popular-5.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Mushishi Zoku Shou 2nd Season'
        }, {
            img: 'http://localhost:3000/img/popular/popular-6.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Monogatari Series: Second Season'
        },
    ]

    return (
        <>
            <div className="popular__product">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="section-title">
                            <h4>Popular Shows</h4>
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
                        dataPopularProduct.map(dataPopularProductDetail => {
                            return (
                                <Card dataProductDetail={dataPopularProductDetail} key={dataPopularProductDetail._key}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default popularProduct;