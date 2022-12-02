import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Data from "./components/Body/Data";
import Favorite from "./components/Body/Favorite";
import userContext from "./components/CreateContext";

import "./App.css";

function App() {
  const [favoriteItem, setFavoriteItem] = useState([]);

  return (
    <div className="App">
      <Header />
      <userContext.Provider value={{ favoriteItem, setFavoriteItem }}>
        <Routes>
          <Route
            path="/"
            element={
              <Data
                favoriteItem={favoriteItem}
                setFavoriteItem={setFavoriteItem}
              />
            }
          ></Route>
          <Route
            path="/Favorites"
            element={
              <Favorite
                favoriteItem={favoriteItem}
                setFavoriteItem={setFavoriteItem}
              />
            }
          ></Route>
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
