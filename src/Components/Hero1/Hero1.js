import React from "react";
import "./Hero1.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero1 = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToSlide = (index) => {
    slider.current.slickGoTo(index);
  };

  const slider = React.useRef();


  return (
    <>
      <div className="mainHero">
        <nav className="navbar">
          <div>
            <img className="navbarimg" src="../../../images/playicon.png" />
          </div>
          <div>
            <ul className="nav-links">
              <li>
                <a style={{ color: "rgba(238, 100, 42, 1)" }} href="#">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#">Stats</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>

              <li></li>
            </ul>
          </div>
          <div>
            <button className="btn"> Register </button>
          </div>
        </nav>
        <br />

        <div className="Nextgenquote">
          <div>
            <img
              className="nextgenicon"
              src="../../../images/nextgenicon.png"
            />
          </div>
          <h1 className="nextgenheading">
            NEXT GENERATION GET YOUR
            <span className="secondhalfline"> DESIRED RANK NOW</span>
          </h1>
         
        </div>

        <div className="parent">
        
          <div>
            <img className="imgribbon" src="../../../images/play-ribbon.png" />
          </div>

          {/* <div className="video">
            <img
              className="videostyle"
              src="../../../images/herovideoframe.png"
            />
          </div> */}
          <div className="video">
            <video className="videostylevideo" controls>
              <source
                src="../../../videos/2928382-hd_1920_1080_30fps.mp4"
                type="video/mp4"
              />
             
            </video>
            
          </div>
          <div>
            <img className="videoicon" src="../../../images/videoicon.png" />
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* // div fro 4 icons // */}

        <div className="fouriconsparent">
          <div>
            <img
              style={{ width: "102px", height: "63px" }}
              src="../../../images/twitch.png"
            />
          </div>
          <div>
            <img
              style={{ width: "136px", height: "76px" }}
              src="../../../images/Rob.png"
            />
          </div>
          <div>
            <img
              style={{ width: "152px", height: "42px" }}
              src="../../../images/chess.png"
            />
          </div>
          <div>
            <img
              style={{ width: "219px", height: "35px" }}
              src="../../../images/gamesradar.png"
            />
          </div>
        </div>
        <br />
        <br />
        {/* // div fro 3 images // */}

        <div className="parentof3images">
          <div className="forinsidebutton">
            <img src="../../../images/Rectangle1.png" />
            <div className="btnof3images">
              <button className="btnninnerstyle">PLAY NOW</button>
            </div>
          </div>

          <div className="forinsidebutton">
            <img src="../../../images/Rectangle2.png" />
            <div className="btnof3images">
              <button className="btnninnerstyle">PLAY NOW</button>
            </div>
          </div>
          <div className="forinsidebutton">
            <img src="../../../images/Rectangle3.png" />
            <div className="btnof3images">
              <button className="btnninnerstyle">PLAY NOW</button>
            </div>
          </div>
        </div>
        {/* // div fro icon and inbox // */}
        <br />
        <br />
        <br />
        <br />
        <div className="iconandinbox">
          <div>
            <img src="../../../images/kingicon.png" />
          </div>
            <div>
          <h1 className="inboxheading">
            THE MOST RECENT PATTERNS, CONVEYED DIRECTLY TO YOUR INBOX.
          </h1>
          </div>
        </div>
        {/* div for solder container */}
        <br />
        <br />
        <br/>
        <br/>
        <div className="solidercont">
          <div className="leftcontent">
            <img className="soldierimg" src="../../../images/soldpic.png" />
          </div>
          <div className="rightcontent">
            <div className="box">
              <img
                className="arrowimg"
                style={{ width: "22px", height: "18px" }}
                src="../../../images/Arrow - Down 2.png"
              />
              <h3 className="staff">
                Staff Picks With Erin This Week's Top Picks
              </h3>
            </div>
            <p className="parastaff">
              For the Consuming Campaign discharge, I remained up the entire
              evening playing and wound up leaving school 'cos I was nodding off
              all over. Most certainly utilized being debilitated a ton in
              school to mess around. Presently I simply use excursion when games
              I'm energized for emerge.
            </p>
            <div className="thirdlineofrightcontent">
              <img
                className="arrowimg"
                style={{ width: "22px", height: "18px" }}
                src="../../../images/Arrow - Down 3.png"
              />
              <h3 className="staff">Compelling Games Is 20 Years of age!</h3>
            </div>
            <div className="lineofright">
              <img
                // style={{ width: "22px", height: "18px" }}
                src="../../../images/rightcontentline.png"
              />
            </div>
            <div className="thirdlineofrightcontent">
              <img
                className="arrowimg"
                style={{ width: "22px", height: "18px" }}
                src="../../../images/Arrow - Down 3.png"
              />
              <h3 className="staff">Compelling Games Is 20 Years of age!</h3>
            </div>
            <div className="lineofright">
              <img
                className="lineofrightstyle"
                // style={{ width: "22px", height: "18px" }}
                src="../../../images/rightcontentline.png"
              />
            </div>

            <div className="rightcontentbuttons">
              <button className="btnsstyleofsolder">Play Now</button>
              <button className="btnsstyleofsolder2">Watch Trailor</button>
            </div>
          </div>
        </div>
        {/* div for gaming award */}
        <div className="gamingaward">
          <h1 className="gamingawardstyle">
            WE'RETHE FIRST GAMING AWARD WINNERS THE WORLD
          </h1>
          <ul id="navbelow" className="nav-links">
            <li>
              <a style={{ color: "rgba(238, 100, 42, 1)" }} href="#">
                Adventure
              </a>
            </li>

            <li>
              <a href="#">Arcade</a>
            </li>
            <li>
              <a href="#">Arena</a>
            </li>
            <li>
              <a href="#">Avoider</a>
            </li>
            <li>
              <a href="#">Balance</a>
            </li>
            <li></li>
          </ul>
        </div>
        {/* four images container */}
        <div className="fourimagescontainer">
          <div className="firstsecndimage">
            <img
              style={{ width: "595px", height: "488px" }}
              src="../../../images/4-1.png"
            />
            <img
              style={{ width: "595px", height: "485px" }}
              src="../../../images/4-2.png"
            />
          </div>
          <div className="thirdfourimage">
            <img
              style={{ width: "595px", height: "556px" }}
              src="../../../images/4-3.png"
            />
            <div>
              <img
                style={{ width: "595px", height: "470px" }}
                src="../../../images/4-4.png"
              />
              <div className="imgfourcontent">
                <div className="contentofimg4">
                  <p style={{ fontSize: "12.13px" }}>
                    We've Have Many More Than
                  </p>
                  <h1 style={{ fontSize: "44px" }}>100+</h1>
                  <p style={{ fontSize: "12.13px" }}>
                    Gaming{" "}
                    <span style={{ color: "rgba(238, 100, 42, 1)" }}>
                      {" "}
                      Collections
                    </span>
                  </p>
                </div>
                <div className="btnimgfourcontent">
                  <button className="btnimgfourcontentstyle">View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* div for Happy clients */}
        <br />
        <br />
        <br />
        <div className="mainhappyclients">
          <img src="../../../images/kingicon.png" />
          <h1>HAPPY CLIENTS</h1>
        </div>
                
  
        <br/>
        {/* div for Happy clients review picture */}
                  

        <div className="carousel-container">
      <div className="carousel-center">
        <Slider {...settings} ref={slider}>
          <div className="reviews">
            <img  className="carousel-centerimg"src="../../../images/review.png" alt="Review 1" />
          </div>
          <div className="reviews">
            <img className="carousel-centerimg" src="../../../images/review.png" alt="Review 2" />
          </div>
          <div className="reviews">
            <img className="carousel-centerimg" src="../../../images/review.png" alt="Review 3" />
          </div>
        </Slider>
      </div>

      {/* Review dots */}
      <div className="reviewsdots">
        <img 
          style={{ width: "17px", height: "17px" }}
          src="../../../images/Ellipse 24.png"
          alt="Review dot 1"
          onClick={() => goToSlide(0)}
        />
        <img
          style={{ width: "17px", height: "17px" }}
          src="../../../images/Ellipse 24.png"
          alt="Review dot 2"
          onClick={() => goToSlide(1)}
        />
        <img
          style={{ width: "17px", height: "17px" }}
          src="../../../images/Ellipse 24.png"
          alt="Review dot 3"
          onClick={() => goToSlide(2)}
        />
        
        <img
          style={{ width: "17px", height: "17px" }}
          src="../../../images/Ellipse 24.png"
          alt="Review dot 3"
          onClick={() => goToSlide(2)}
        />
         <img
          style={{ width: "17px", height: "17px" }}
          src="../../../images/Ellipse 24.png"
          alt="Review dot 3"
          onClick={() => goToSlide(2)}
        />
        

      </div>

    </div>
        <br />
        <br />
        <div className="footer"></div>
        <nav className="navbar">
          <div>
            <img className="navbarimg" src="../../../images/playicon.png" />
          </div>
          <div>
            <ul className="nav-links">
              <li>
                <a href="#">Marketplace</a>
              </li>
              <li>
                <a href="#">Stats</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>

              <li></li>
            </ul>
          </div>
          <div className="footericons">
            <img
              style={{ width: "28px", height: "28px" }}
              src="../../../images/1.png"
            />
            <img
              style={{ width: "28px", height: "28px" }}
              src="../../../images/2.png"
            />
            <img
              style={{ width: "28px", height: "28px" }}
              src="../../../images/3.png"
            />
            <img
              style={{ width: "28px", height: "28px" }}
              src="../../../images/4.png"
            />
          </div>
        </nav>
        <br />
        <br />

        <div className="fline">
          <img src="../../../images/footerline.png" />
        </div>

        <p className="fpara">
          © Copyright 2022, All Rights Reserved by Play Games
        </p>
      </div>
    </>
  );
};

export default Hero1;
