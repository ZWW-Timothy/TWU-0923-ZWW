import React from 'react';
import { Link } from 'react-router-dom';
import './home.less';

import heroImage from "../images/hero-image.png";
import calculatorImage from "../images/calculator.png";
import timerImage from "../images/timer.png";

const Home = () => {
  return (
    <div className="home">
      <section className="topHalf">
        <h1>在线实用工具</h1>
        <img src={heroImage} alt="hero-image.png" />
      </section>
      <section className="bottomHalf">
        <section className="link">
          <img src={calculatorImage} alt="calculator.png" />
          <Link to="/calculator" className="linkText">计算器</Link>
        </section>
        <section className="link">
          <img src={timerImage} alt="timer.png" />
          <Link to="/countdown" className="linkText">倒计时器</Link>
        </section>
      </section>


    </div>);
};

export default Home;
