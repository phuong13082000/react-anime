import React from "react";
import {Link} from "react-router-dom";
import Review from "../Review/Review";
import ReactPlayer from "react-player";

const watching = () => {

    return (
        <>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to="/"><i className="fa fa-home"/> Home</Link>
                                <Link to="/anime-watching">Watching</Link>
                                <Link to="#">Romance</Link>
                                <span>Fate Stay Night: Unlimited Blade</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="anime-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="anime__video__player">
                                <ReactPlayer url='https://www.youtube.com/watch?v=P2M1zD6VDok&ab_channel=BHStudio' width="100%" height="500px" playing={false} controls={true}/>
                            </div>
                            <div className="anime__details__episodes">
                                <div className="section-title">
                                    <h5>List Name</h5>
                                </div>
                                <Link to="#">Ep 01</Link>
                                <Link to="#">Ep 02</Link>
                                <Link to="#">Ep 03</Link>
                                <Link to="#">Ep 04</Link>
                                <Link to="#">Ep 05</Link>
                                <Link to="#">Ep 06</Link>
                                <Link to="#">Ep 07</Link>
                                <Link to="#">Ep 08</Link>
                                <Link to="#">Ep 09</Link>
                                <Link to="#">Ep 10</Link>
                                <Link to="#">Ep 11</Link>
                                <Link to="#">Ep 12</Link>
                                <Link to="#">Ep 13</Link>
                                <Link to="#">Ep 14</Link>
                                <Link to="#">Ep 15</Link>
                                <Link to="#">Ep 16</Link>
                                <Link to="#">Ep 17</Link>
                                <Link to="#">Ep 18</Link>
                                <Link to="#">Ep 19</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <Review/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default watching