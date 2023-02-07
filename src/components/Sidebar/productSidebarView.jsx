import React from 'react';

const productSidebarView = () => {
    return (
        <>
            <div className="product__sidebar__view">
                <div className="section-title">
                    <h5>Top Views</h5>
                </div>
                <ul className="filter__controls">
                    <li className="active" data-filter="*">Day</li>
                    <li data-filter=".week">Week</li>
                    <li data-filter=".month">Month</li>
                    <li data-filter=".years">Years</li>
                </ul>
                <div className="filter__gallery">
                    <div className="product__sidebar__view__item set-bg mix day years">
                        <img src="http://localhost:3000/img/sidebar/tv-1.jpg" alt=""/>
                        <div className="ep">18 / ?</div>
                        <div className="view"><i className="fa fa-eye"/> 9141</div>
                        <h5><a href="#">Boruto: Naruto next generations</a></h5>
                    </div>
                    <div className="product__sidebar__view__item set-bg mix month week">
                        <img src="http://localhost:3000/img/sidebar/tv-2.jpg" alt=""/>
                        <div className="ep">18 / ?</div>
                        <div className="view"><i className="fa fa-eye"/> 9141</div>
                        <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                    </div>
                    <div className="product__sidebar__view__item set-bg mix week years">
                        <img src="http://localhost:3000/img/sidebar/tv-3.jpg" alt=""/>
                        <div className="ep">18 / ?</div>
                        <div className="view"><i className="fa fa-eye"/> 9141</div>
                        <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                    </div>
                    <div className="product__sidebar__view__item set-bg mix years month">
                        <img src="http://localhost:3000/img/sidebar/tv-4.jpg" alt=""/>
                        <div className="ep">18 / ?</div>
                        <div className="view"><i className="fa fa-eye"/> 9141</div>
                        <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                    </div>
                    <div className="product__sidebar__view__item set-bg mix day">
                        <img src="http://localhost:3000/img/sidebar/tv-5.jpg" alt=""/>
                        <div className="ep">18 / ?</div>
                        <div className="view"><i className="fa fa-eye"/> 9141</div>
                        <h5><a href="#">Fate stay night unlimited blade works</a></h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default productSidebarView