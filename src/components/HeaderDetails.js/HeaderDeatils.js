import React from "react";
import "./FirstHeaderDetails.css";

const HeaderDeatils = () => {
  return (
    <div>
      <div className="hero py-20 bg-stone w-10/12 mx-auto rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse gap-36">
          <img
            src="https://www.bahamianstudio.com/wp-content/uploads/2020/08/team-designers-working-computer-gif-the-bahamian-studio-branding-graphic-design-flyers-logos-printing-marketing-nassau-bahamas.gif"
            className="md:max-w-sm  header-image rounded-lg shadow-2xl"
            alt=""
            data-aos="fade-down-right"
            data-aos-duration="2000"
          />
          <div
            className="lg:text-left text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
          >
            <h2 className="text-5xl lg:py-20 py-3 font-bold animation-text text-white">
              Test Youself with{" "}
              <span className="text-7xl text-orange-500">Quiz-Munia</span>
            </h2>
            <p className="py-6">
              <strong className="text-white">
                Take an IQ test, career test or personality test online now. Get
                serious answers for career assessment, intelligence and
                personality.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDeatils;
