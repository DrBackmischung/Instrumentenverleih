import React from "react";
import Loader from "react-loader-spinner";
import "./LoadingAnimation.css";
  
function LoadingAnimation() {
  return (
      <div className="loadingContainer">
        <Loader type="MutatingDots" color="secondary" secondaryColor="secondary" height={100} width={100} />
      </div>
  );
}

export default LoadingAnimation;