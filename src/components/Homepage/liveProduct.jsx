import React from "react";
import Card from "../Product/CardIndex";
import {Link} from "react-router-dom";

const liveProduct = () => {
    const dataLiveProduct = [
        {
            img: 'http://localhost:3000/img/live/live-1.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Shouwa Genroku Rakugo Shinjuu'
        }, {
            img: 'http://localhost:3000/img/live/live-2.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Mushishi Zoku Shou 2nd Season'
        }, {
            img: 'http://localhost:3000/img/live/live-3.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Mushishi Zoku Shou: Suzu no Shizuku'
        }, {
            img: 'http://localhost:3000/img/live/live-4.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'The Seven Deadly Sins: Wrath of the Gods'
        }, {
            img: 'http://localhost:3000/img/live/live-5.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Fate/stay night Movie: Heaven\'s Feel - II. Lost'
        }, {
            img: 'http://localhost:3000/img/live/live-6.jpg',
            ep: '18',
            fullEp: '18',
            comment: '11',
            eye: '9141',
            active: 'Active',
            category: 'Movie',
            name: 'Kizumonogatari II: Nekketsu-hen'
        },
    ]

    return (
        <>
            <div className="live__product">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="section-title">
                            <h4>Live Action</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="btn__all">
                            <Link to="#" className="primary-btn">View All <span className="arrow_right"/></Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        dataLiveProduct.map(dataLiveProductDetail => {
                            return (
                                <Card dataProductDetail={dataLiveProductDetail} key={dataLiveProductDetail._key}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default liveProduct