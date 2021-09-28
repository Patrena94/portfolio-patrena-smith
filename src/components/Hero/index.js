import React from "react";
import jumbotron from "react-bootstrap/Jumbotron";

function Hero(){
    return(
        <Jumbotron>
        <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      </Jumbotron>
    );
}
export default Hero;