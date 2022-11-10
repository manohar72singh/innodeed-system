/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export  function CarModel(props) {
    const {data}= props;
  return (
    <div className="car_card">
        <div className='car_container'>
            <div className='card_header'>
                <p className='tital'>{data.bodyType.toUpperCase()}</p>
                <label className='subtital'><b>{data.modelName.toUpperCase()}</b></label>
                <label className='title'>{data.modelType}</label>
            </div>
            <div className='card_body'>
                <img src={data.imageUrl} />
            </div>  
            <div className='card_footer'>
                <div>
                    <p>LEARN &gt;</p>
                </div>
                <div>
                    <p>SHOP &gt;</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
