import logo from "./img/logo-dark.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <div className="bg-img">
            <div className="container">
              <div className="menu__btn-wrapper">
                <p className="bebas">MENU</p>
                <button className="menu__btn">
                  <span className="burger"></span>
                </button>
              </div>
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__item">
                    <a className="menu__link">Assets</a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link">Ambassadors</a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link">Events</a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link">Heritage</a>
                  </li>
                  <li className="menu__item">
                    <a className="menu__link">Contact</a>
                  </li>
                </ul>
              </nav>

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
      </div>
    </div>
  );
}

export default App;
