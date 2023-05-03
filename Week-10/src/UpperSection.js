import React from "react";

function UpperSection() {
  return (
    <div className="Taglines-img">
      <div className="Taglines-div">
        <h2 className="tagline">More Than just Shorter Links</h2>
        <h5 className="tagline2">
          Build your brand's recognition and see how your links are performing
        </h5>
      </div>
      <div className="image-div">
        <img
          className="home-photo"
          src={require("./images/homeImg.jpg")}
          alt={"Souvik Das"}
        />
      </div>
    </div>
  );
}

export { UpperSection };
