import { useContext } from "react";

import React from "react";
import userContext from "../CreateContext";

function Favorite() {
  const { favoriteItem } = useContext(userContext);
  //   console.log(favoriteItem)

  return (
    <div>
      <div className="data_container">
        <div className="subdata_container">
          {favoriteItem.map(
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
                    <div id="house_box" className={price} key={id}>
                      <div>
                        <img src={image} alt="" />
                      </div>
                      <div className="details_container">
                        <div className="price_icon">
                          <p>
                            <strong className="symbol">{price}</strong>/month
                          </p>
                          <button>
                            <i class="fa-regular fa-heart heart"></i>
                          </button>
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
  );
}

export default Favorite;
