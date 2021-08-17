import React from "react";
import "./Load.css";
import Loading from "../../Assets/loading.gif";


const Load = () => {
  return (
  <img title="loading"  className="loadingGif" src={Loading} alt="Loading" />  
  );
};

export default Load;