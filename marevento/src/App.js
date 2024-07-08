import logo from "./img/logo-dark.svg";
import slideImg from "./img/slide1.png";
import "./App.css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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

  const paginationItems = ["Slide1", "Slide2", "Slide3", "Slide4", "Slide5"];
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <div className="bg-img">
            <div className="container">
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
              direction={"vertical"}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}">${paginationItems[index]}</span>`;
                },
              }}
              onSlideChange={handleSlideChange}
              modules={[Pagination]}
              className="slider"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              <SwiperSlide>
                <div className="slide">
                  <div className="slide-inner">
                    <img src={slideImg} alt="Slide 1" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <div className="slide-inner">
                    <img src={slideImg} alt="Slide 2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <div className="slide-inner">
                    <img src={slideImg} alt="Slide 3" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <div className="slide-inner">
                    <img src={slideImg} alt="Slide 4" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <div className="slide-inner">
                    <img src={slideImg} alt="Slide 5" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="pagination">
              <h2>Slides</h2>
              <div className="pagination__inner">
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
        </section>
      </div>
    </div>
  );
}

export default App;
