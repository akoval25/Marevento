import logo from "./img/logo-dark.svg";
import logoFooter from "./img/logo-footer.svg";
import slideImg from "./img/slide1.png";
import slideImg2 from "./img/slide2.jpg";
import ambassador1 from "./img/ambassador1.png";
import event1 from "./img/event1.png";
import facebook from "./img/icon-facebook.svg";
import instagram from "./img/icon-instagram.svg";
import youtube from "./img/icon-youtube.svg";
import telegram from "./img/icon-telegram.svg";
import "./App.css";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper/modules";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.realIndex);
    }
  };

  const paginationItems = [
    "Slide1",
    "Slide2",
    "Slide3",
    "Slide4",
    "Slide5",
    "Slide6",
  ];

  // useEffect(() => {
  //   const objWindow = window;
  //   const elements = document.querySelectorAll(".headline__bg");
  //   let ticking = false;
  
  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(() => {
  //         elements.forEach((bgObj) => {
  //           const yPos = -(objWindow.scrollY / bgObj.dataset.speed);
  //           const coords = "100% " + yPos/3 + "px";
  //           bgObj.style.backgroundPosition = coords;
  //         });
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };
  
  //   if (window.innerWidth >= 768) {
  //     window.addEventListener("scroll", onScroll);
  //   }
  
  //   return () => {
  //     if (window.innerWidth >= 768) {
  //       window.removeEventListener("scroll", onScroll);
  //     }
  //   };
  // }, []);
  

  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <div className="bg-img">
            
              <nav className={`menu ${menuActive ? "menu--active" : ""}`}>
                <ul className="menu__list">
                  <li className="menu__item">
                    <a className="menu__link" onClick={closeMenu}>
                      Assets
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" onClick={closeMenu}>
                      Ambassadors
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" onClick={closeMenu}>
                      Events
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" onClick={closeMenu}>
                      Heritage
                    </a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link" onClick={closeMenu}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="menu__btn-wrapper">
                <p className="bebas">MENU</p>
                <button
                  className={`menu__btn ${
                    menuActive ? "menu__btn--active" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  <span className="burger"></span>
                </button>
              </div>
              <div className="header__inner">
                <div className="header__inner--text">
                  <h1>di Marevento</h1>
                  <p>our motto</p>
                </div>
                <div className="header__inner--logo">
                  <img src={logo}></img>
                </div>
                <div className="header__inner--btn">
                  <a className="btn">See more</a>
                </div>
              
            </div>
          </div>
        </header>
        <section className="text__component">
          <div className="text__component-inner">
            <div className="container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
        <section className="slider__vertical">
          <div className="slider__vertical-inner">
            <Swiper
              effect={"fade"}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}">${paginationItems[index]}</span>`;
                },
              }}
              onSlideChange={handleSlideChange}
              modules={[EffectFade, Pagination]}
              className="slider"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              <SwiperSlide>
                
                  
                    <img src={slideImg} alt="Slide 1" />
                  
                
              </SwiperSlide>
              <SwiperSlide>
                
                  
                    <img src={slideImg2} alt="Slide 2" />
                  
                
              </SwiperSlide>
              <SwiperSlide>
                
                  
                    <img src={slideImg} alt="Slide 3" />
                  
                
              </SwiperSlide>
              <SwiperSlide>
                
                  
                    <img src={slideImg2} alt="Slide 4" />
                  
                
              </SwiperSlide>
              <SwiperSlide>
                
                  
                    <img src={slideImg} alt="Slide 5" />
                  
                
              </SwiperSlide>
              <SwiperSlide>
                
                  
                    <img src={slideImg2} alt="Slide 6" />
                  
                
              </SwiperSlide>
            </Swiper>
            <div className="pagination">
              <div className="pagination__inner">
                <h2>Slides</h2>
                <div className="pagination__items">
                  {paginationItems.map((item, index) => (
                    <span
                      key={index}
                      className={`pagination__bottom-item ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onClick={() => swiperRef.current.slideTo(index)}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text__component">
          <div className="text__component-inner">
            <div className="container">
              <h2>Assets</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
        <section className="headline__component">
          <div className="headline__bg bg-1" data-speed="10">
            <div className="container">
              <div className="header__inner">
                <h2>HEADLINE</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <a className="btn">See more</a>
              </div>
            </div>
          </div>
        </section>
        <section className="ambassadors__component">
          <div className="container">
            <h2>Ambassadors</h2>
            <div className="ambassadors__component-inner">
              <div className="ambassadors__component-item">
                <div className="ambassadors__component-item-img">
                  <img src={ambassador1}></img>
                </div>
                <h3>Anna Ivanova</h3>
                <p>Influencer, model,19y.o.</p>
              </div>
              <div className="ambassadors__component-item">
                <div className="ambassadors__component-item-img">
                  <img src={ambassador1}></img>
                </div>
                <h3>Anna Ivanova</h3>
                <p>Influencer, model,19y.o.</p>
              </div>
              <div className="ambassadors__component-item">
                <div className="ambassadors__component-item-img">
                  <img src={ambassador1}></img>
                </div>
                <h3>Anna Ivanova</h3>
                <p>Influencer, model,19y.o.</p>
              </div>
              <div className="ambassadors__component-item">
                <div className="ambassadors__component-item-img">
                  <img src={ambassador1}></img>
                </div>
                <h3>Anna Ivanova</h3>
                <p>Influencer, model,19y.o.</p>
              </div>
              <div className="ambassadors__component-item">
                <div className="ambassadors__component-item-img">
                  <img src={ambassador1}></img>
                </div>
                <h3>Anna Ivanova</h3>
                <p>Influencer, model,19y.o.</p>
              </div>
              <div className="ambassadors__component-item">
                <div className="ambassadors__component-item-img">
                  <img src={ambassador1}></img>
                </div>
                <h3>Anna Ivanova</h3>
                <p>Influencer, model,19y.o.</p>
              </div>
              <div className="ambassadors__component-item">
                <div className="ambassadors__component-item-img">
                  <img src={ambassador1}></img>
                </div>
                <h3>Anna Ivanova</h3>
                <p>Influencer, model,19y.o.</p>
              </div>
              <div className="ambassadors__component-item">
                <div className="ambassadors__component-item-img">
                  <img src={ambassador1}></img>
                </div>
                <h3>Anna Ivanova</h3>
                <p>Influencer, model,19y.o.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="headline__component">
          <div className="headline__bg bg-2" data-speed="10">
            <div className="container">
              <div className="header__inner">
                <h2>HEADLINE</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <a className="btn">See more</a>
              </div>
            </div>
          </div>
        </section>
        <section className="events__component">
          <div className="container">
            <h2>Ambassadors</h2>
            <div className="events__component-inner">
              <div className="events__component-item">
                <div className="events__component-item-img">
                  <img src={event1}></img>
                </div>
                <h3>Event number 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="events__component-item">
                <div className="events__component-item-img">
                  <img src={event1}></img>
                </div>
                <h3>Event number 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="text__component light-bg">
          <div className="text__component-inner">
            <div className="container">
              <h2>Heritage</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
            </div>
          </div>
        </section>
        <section className="contact__component dark-bg">
          <div className="container">
            <h2>Contact</h2>
            <div className="contact__component-inner">
              <div className="contact__component-text">
                <h3>Contact</h3>
                <p>
                  City, Country<br></br>
                  Some avenue <br></br>
                  12 house
                </p>
                <div className="contact__component-text--links">
                <a className="phone" link="tel:911">
                  +3 80(93) 419-55-55
                </a>
                <a className="phone" link="tel:911">
                  +3 80(93) 419-55-55
                </a></div>
              </div>
              <div className="contact__component-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2119.026930800176!2d21.003395079509104!3d52.23095966507244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c3c80e54d%3A0x12702cc984d8e75c!2sZ%C5%82ote%20Tarasy!5e0!3m2!1sen!2sua!4v1720817678377!5m2!1sen!2sua"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="social__component light-bg">
          <div className="container">
            <div className="social__component-inner">
              <div className="social__component-item">
                <a href="#">
                  <img src={facebook}></img>
                </a>
              </div>
              <div className="social__component-item">
                <a href="#">
                  <img src={instagram}></img>
                </a>
              </div>
              <div className="social__component-item">
                <a href="#">
                  <img src={youtube}></img>
                </a>
              </div>
              <div className="social__component-item">
                <a href="#">
                  <img src={telegram}></img>
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer black-bg">
          <div className="container">
            <div className="footer__inner">
              <div className="footer__item-content">
                <div className="footer__item-content--logo">
                  <img src={logoFooter}></img>
                  <h2 className="sitename">di Marevento</h2>
                </div>
                <p>
                  City, Country<br></br>
                  Some avenue <br></br>
                  12 house
                </p>
                <div className="footer__item-content--phone">
                  <a className="phone" link="tel:911">
                    +3 80(93) 419-55-55
                  </a>
                  <a className="phone" link="tel:911">
                    +3 80(93) 419-55-55
                  </a>
                </div>
              </div>
              {/* <div className="footer__item-navigation">
                <nav className="menu__footer">
                  <ul className="menu__footer-list">
                    <li className="menu__footer-item">
                      <a className="menu__footer-link">Assets</a>
                    </li>
                    <li className="menu__footer-item">
                      <a className="menu__footer-link">Ambassadors</a>
                    </li>
                    <li className="menu__footer-item">
                      <a className="menu__footer-link">Events</a>
                    </li>
                    <li className="menu__footer-item">
                      <a className="menu__footer-link">Heritage</a>
                    </li>
                    <li className="menu__footer-item">
                      <a className="menu__footer-link">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
