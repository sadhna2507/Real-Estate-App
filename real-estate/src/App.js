import Header from "./components/Header/Header";
// import logo from './logo.svg';
import "./App.css";
import Data from "./components/Body/Data";
import React, { useState } from "react";
import Favorite from './components/Body/Favorite';
import { Route, Routes } from "react-router-dom";
import ABC from "./components/CreateContext";

function App() {
  const [FavoriteItem, setFavoriteItem] = useState([]);
 
  return (
    <div className="App">
      <Header />
      <ABC.Provider value={{FavoriteItem, setFavoriteItem}}>
      <Routes>
        
        <Route
          path="/"
          element={
            <Data 
            
              FavoriteItem={FavoriteItem}
              setFavoriteItem={setFavoriteItem}
            />
          }
        ></Route>
        <Route
          path="/Favorites"
          element={
            <Favorite
              FavoriteItem={FavoriteItem}
              setFavoriteItem={setFavoriteItem}
            />
          }
        ></Route> 
        
      </Routes>
      </ABC.Provider>
    </div>
  );
}

export default App;
