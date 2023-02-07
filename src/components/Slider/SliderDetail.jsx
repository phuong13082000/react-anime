import React from 'react';

const SliderDetail = ({dataSliderDetail}) => {
    const {img} = dataSliderDetail;

    return (
        <img className="img" src={img} alt=""/>
    )
}

export default SliderDetail