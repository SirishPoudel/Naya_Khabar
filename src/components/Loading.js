import React from "react";
import rendering from "./rendering.gif";

const loading = () => {
  return (
    <div>
      <div className="text-center">
        <img src={rendering} alt="loading" height={50} />
      </div>
    </div>
  );
};
export default loading;
