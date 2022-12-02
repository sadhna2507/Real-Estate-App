import { createContext } from "react";
const ABC = createContext();

export default ABC;

// import React, { useState, useEffect, createContext } from "react";
// import axios from "axios";


// const createContextApi = createContext();

// function ContextApi({ children }) {
//   const [realEstate,setRealEstateData] = useState([]);
//   useEffect(() => {
//     axios.get("https://raw.githubusercontent.com/GAYATRIBHAGWAT11/RealEstateJSON/master/RealEstate.json")
//     .then((res) => {
//         //    console.log(res.data) 
//         setRealEstateData(res.data)
//     })
//   }, []);

//   return (
//     <>
//       <createContextApi.Provider value={{realEstate}}>
//         {children}
//       </createContextApi.Provider>
//     </>
//   );
// }

// export {ContextApi,createContextApi}