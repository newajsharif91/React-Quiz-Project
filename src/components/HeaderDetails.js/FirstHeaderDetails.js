import React from "react";
import "./FirstHeaderDetails.css";
import { Typewriter } from "react-simple-typewriter";

const FirstHeaderDetails = () => {
  return (
    <div>
      <h2 className=" text-5xl lg:py-5 py-2 font-bold animation-text">
        <span className="header-typewriter">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Let's Explore YourSelf With us"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={20}
            delaySpeed={10}
          />
        </span>
      </h2>
    </div>
  );
};

export default FirstHeaderDetails;
