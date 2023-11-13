import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-cover opacity-90 ${styles.noramlFlex}`}
      style={{
        backgroundImage: "url(https://i.ibb.co/9gFgxvT/bgAjrak.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]  text-center`}>
        <div className="bg-black p-5 rounded-xl">
          <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-white font-[600] capitalize`}
          >
            Traditional & Cultural Products in Pakistan
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-red-400">
            The Culture is defined as all ways of life including arts, beliefs,
            and foundations that are transferred from generation to generation.
            It includes protocols of manners, dress, language, religion,
          </p>
        </div>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins]  text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
