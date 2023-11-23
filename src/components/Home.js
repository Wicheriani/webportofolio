import React from "react";
import homeImage from '../assets/saya.png';

export const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="overlap-group-wrapper">
        <img className="img" alt="home" src={homeImage} />
          <div className="overlap-group">
            <div className="text-wrapper">WICHERIANI GALUH DESDUIPA</div>
            <div className="text-wrapper-2">Undergraduate Computer Science Education Student</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
