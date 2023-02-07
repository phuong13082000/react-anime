import {Link} from "react-router-dom";
import Review from "../Review/Review";

const Detail = () => {
    return (
        <>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to="/"><i className="fa fa-home"/> Home</Link>
                                <Link to="/categories">Categories</Link>
                                <span>Romance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="anime-details spad">
                <div className="container">
                    <div className="anime__details__content">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="anime__details__pic set-bg">
                                    <img src="http://localhost:3000/img/anime/details-pic.jpg" alt=""/>
                                    <div className="comment"><i className="fa fa-comments"/> 11</div>
                                    <div className="view"><i className="fa fa-eye"/> 9141</div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="anime__details__text">
                                    <div className="anime__details__title">
                                        <h3>Fate Stay Night: Unlimited Blade</h3>
                                        <span>フェイト／ステイナイト, Feito／sutei naito</span>
                                    </div>
                                    <div className="anime__details__rating">
                                        <div className="rating">
                                            <Link to="#"><i className="fa fa-star"/></Link>
                                            <Link to="#"><i className="fa fa-star"/></Link>
                                            <Link to="#"><i className="fa fa-star"/></Link>
                                            <Link to="#"><i className="fa fa-star"/></Link>
                                            <Link to="#"><i className="fa fa-star-half-o"/></Link>
                                        </div>
                                        <span>1.029 Votes</span>
                                    </div>
                                    <p>
                                        Every human inhabiting the world of Alcia is branded by a
                                        “Count” or a number written on their body. For Hina’s mother,
                                        her total drops to 0 and she’s pulled into the Abyss, never to
                                        be seen again. But her mother’s last words send Hina on a quest
                                        to find a legendary hero from the Waste War - the fabled Ace!
                                    </p>
                                    <div className="anime__details__widget">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Type:</span> TV Series</li>
                                                    <li><span>Studios:</span> Lerche</li>
                                                    <li><span>Date aired:</span> Oct 02, 2019 to ?</li>
                                                    <li><span>Status:</span> Airing</li>
                                                    <li><span>Genre:</span> Action, Adventure, Fantasy, Magic</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Scores:</span> 7.31 / 1,515</li>
                                                    <li><span>Rating:</span> 8.5 / 161 times</li>
                                                    <li><span>Duration:</span> 24 min/ep</li>
                                                    <li><span>Quality:</span> HD</li>
                                                    <li><span>Views:</span> 131,541</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="anime__details__btn">
                                        <Link to="#" className="follow-btn"><i className="fa fa-heart-o"/> Follow</Link>
                                        <Link to="#" className="watch-btn"><span>Watch Now</span> <i className="fa fa-angle-right"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <Review/>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="anime__details__sidebar">
                                <div className="section-title">
                                    <h5>you might like...</h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg">
                                    <img src="http://localhost:3000/img/sidebar/tv-1.jpg" alt=""/>
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"/> 9141</div>
                                    <h5><a href="#">Boruto: Naruto next generations</a></h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg">
                                    <img src="http://localhost:3000/img/sidebar/tv-2.jpg" alt=""/>
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"/> 9141</div>
                                    <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg">
                                    <img src="http://localhost:3000/img/sidebar/tv-3.jpg" alt=""/>
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"/> 9141</div>
                                    <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg">
                                    <img src="http://localhost:3000/img/sidebar/tv-4.jpg" alt=""/>
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"/> 9141</div>
                                    <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail