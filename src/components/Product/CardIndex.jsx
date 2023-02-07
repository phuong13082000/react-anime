import React from "react";
import {Link} from "react-router-dom";

const cardIndex = ({dataProductDetail}) => {
    const {img, ep, fullEp, comment, eye, active, category, name} = dataProductDetail;
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="product__item">
                <div className="product__item__pic set-bg">
                    <img src={img} alt=""/>
                    <div className="ep">{ep} / {fullEp}</div>
                    <div className="comment"><i className="fa fa-comments"/> {comment}</div>
                    <div className="view"><i className="fa fa-eye"/> {eye}</div>
                </div>
                <div className="product__item__text">
                    <ul>
                        <li>{active}</li>
                        <li>{category}</li>
                    </ul>
                    <h5>
                        <Link to="/anime-detail">{name}</Link>
                    </h5>
                </div>
            </div>
        </div>

    )
}
export default cardIndex