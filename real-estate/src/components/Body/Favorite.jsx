import React from 'react'
import ABC from '../CreateContext';
import { useContext } from 'react';
function Favorite() {
  const { FavoriteItem } = useContext(ABC);
//   console.log(FavoriteItem)

  return (
    
    <div>
      <div className="data_container">
          <div className="subdata_container">
          {FavoriteItem.map(
              ({
                name,
                image,
                price,
                Location,
                PropertyType,
                bathroom,
                bed,
                area,
                id,
              }) => {
                return (
                  <>
                    <div className="house_show">
                      <div id="House_box" className={price} key={id}>
                        <div className="HouseImg">
                          <img src={image} alt="" />
                        </div>
                        <div className="detaills_cotainer">
                        <div className="price_icon">
                          <p>
                            <strong style={{ color: "rgb(209, 117, 248)" }}>{price}</strong>/month
                          </p>
                          <button><i class="fa-regular fa-heart heart"></i></button>
                          
                        </div>
                        <h2>{name}</h2>
                        <p className="propertytype">{PropertyType}</p>
                        <p className="location">{Location}</p>
                        <div className="bhk">
                          <p>
                            <i class="fa-solid fa-bed"></i>
                            {bed} Beds
                          </p>
                          <p>
                            <i class="fa-solid fa-shower"></i>
                            {bathroom} Bathrooms
                          </p>
                          <p>
                            <i className="fa fa-circle-o"></i>
                            {area} Area
                          </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            )}
          </div>
          </div>
    </div>
  )
}

export default Favorite
