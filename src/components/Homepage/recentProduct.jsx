import Card from "../Product/CardIndex";
import React from "react";

const recentProduct = () => {
    const dataRecentProduct = [
        {
            img: 'http://localhost:3000/img/recent/recent-1.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Great Teacher Onizuka'
        }, {
            img: 'http://localhost:3000/img/recent/recent-2.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Fate/stay night Movie: Heaven\'s Feel - II. Lost'
        }, {
            img: 'http://localhost:3000/img/recent/recent-3.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Mushishi Zoku Shou: Suzu no Shizuku'
        }, {
            img: 'http://localhost:3000/img/recent/recent-4.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Fate/Zero 2nd Season'
        }, {
            img: 'http://localhost:3000/img/recent/recent-5.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Kizumonogatari II: Nekket su-hen'
        }, {
            img: 'http://localhost:3000/img/recent/recent-6.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'The Seven Deadly Sins: Wrath of the Gods'
        },
    ]

    return(
        <>
            <div className="recent__product">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="section-title">
                            <h4>Recently Added Shows</h4>
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
                        dataRecentProduct.map(dataRecentProductDetail => {
                            return (
                                <Card dataProductDetail={dataRecentProductDetail} key={dataRecentProductDetail._key}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default recentProduct