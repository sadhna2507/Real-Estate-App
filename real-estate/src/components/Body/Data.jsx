import { useState, useEffect, useContext } from "react";

import React from "react";
import axios from "axios";
import userContext from "../CreateContext";

function Data() {
  const [data, SetData] = useState([]);
  const { favoriteItem, setFavoriteItem } = useContext(userContext);
  const [ResultData, setResultData] = useState([]);
  const [search, setsearch] = useState({
    price: "",
    Location: "",
    date: "",
    Type: "",
  });

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/sadhna2507/Cricket-API/master/House.json"
      )
      .then((response) => {
        SetData(response.data);
        setResultData(response.data);
      });
  }, []);

  const handleSearch = () => {
    let splitprice = search.price.split("-");
    let xPrice = parseInt(splitprice[0]);
    let yPrice = parseInt(splitprice[1]);
    const filterData = ResultData.filter((searchvalue) => {
      let myPrice = searchvalue.price;
      myPrice = parseInt(myPrice.slice(1, 2) + myPrice.slice(3));
      let tempLocation = searchvalue.Location.split(",");
      let myLocation = tempLocation[1];
      if (
        (myLocation === search.Location || search.Location === "") &&
        xPrice <= myPrice &&
        yPrice >= myPrice &&
        (searchvalue.PropertyType === search.Type ||
          searchvalue.PropertyType == "") &&
        (search.date === "" || search.date <= searchvalue.date)
      ) {
        return searchvalue;
      }
    });
    SetData(filterData);
  };

  const handleFavorite = (item) => {
    console.log(item);
    setFavoriteItem([...favoriteItem, item]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setsearch({
      ...search,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <div>
        <div className="mainfilter_container">
          <div className="filtersub_container">
            <div className="search_container">
              <h1>Search Properties to rent</h1>
              <input
                type="text"
                name=""
                id="mainsearch"
                placeholder="Search with SearchBar"
                onChange={handleChange}
              />
            </div>
            <div className="filter_container">
              <div className="location">
                <p>Location</p>
                <select id="dropdowm" name="Location" onChange={handleChange}>
                  <option value="All">All</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Noida">Noida</option>
                </select>
              </div>
              <div className="date">
                <p>When</p>
                <input type="date" name="date" onChange={handleChange} />
              </div>

              <div className="price">
                <p>Price</p>
                <select name="price" id="dropdowm" onChange={handleChange}>
                  <option value="2000-3000">2000-3000</option>
                  <option value="3100-4000">3100-4000</option>
                  <option value="4100-5000">4100-5000</option>
                </select>
              </div>
              <div className="propertytype">
                <p>Property type </p>
                <select name="Type" id="dropdowm" onChange={handleChange}>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                </select>
              </div>
              <div>
                <button className="searchButton" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="data_container">
        <div className="subdata_container">
          {data.length == 0 ? (
            <h1>No Data Available...</h1>
          ) : (
            data.map((item) => {
              return (
                <>
                  <div className="house_show">
                    <div id="House_box">
                      <div className="HouseIhg">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="details_container">
                        <div className="price_icon">
                          <p>
                            <strong style={{ color: "rgb(209, 117, 248)" }}>
                              {item.price}
                            </strong>
                            /month
                          </p>
                          <button onClick={() => handleFavorite(item)}>
                            <i
                              id={item.id}
                              class="fa-regular fa-heart heart"
                            ></i>
                          </button>
                        </div>
                        <h2>{item.name}</h2>
                        <p className="propertytype">{item.PropertyType}</p>
                        <p className="location">{item.Location}</p>
                        <div className="bhk">
                          <p>
                            <i class="fa-solid fa-bed"></i>
                            {item.bed} Beds
                          </p>
                          <p>
                            <i class="fa-solid fa-shower"></i>
                            {item.bathroom} Bathrooms
                          </p>
                          <p>
                            <i className="fa fa-circle-o"></i>
                            {item.area} Area
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Data;
