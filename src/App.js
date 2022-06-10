import bookingsIcon from './assets/images/briefcase.svg';
import profileIcon from './assets/images/user.svg';
import './assets/css/style.css';

function App() {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <a className="header__logo" href="/">Travel App</a>

          <nav className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <a className="nav-header__inner" href="./bookings.html">
                  <span className="visually-hidden">Bookings</span>
                  <img src={bookingsIcon} alt="icon"></img>
                </a>
              </li>
              <li className="nav-header__item" title="Profile">
                <div className="nav-header__inner profile-nav" tabindex="0">
                  <a className="nav-header__inner" href="./bookings.html">
                    <span className="visually-hidden">Profile</span>
                    <img src={profileIcon} alt="icon"></img>
                  </a>
                  <ul className="profile-nav__list">
                    <li className="profile-nav__item profile-nav__username">John Doe</li>
                    <li className="profile-nav__item">
                      <button className="profile-nav__sign-out button">Sign Out</button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <h1 className="visually-hidden">Travel App</h1>
        {/* TODO: add content */}
      </main>

      <footer className="footer">
        <span className="footer__text">
          from
          <a className="footer__link" href="https://binary-studio.com">binary studio</a>
          with
          <svg width="21" height="16" viewBox="0 0 21 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M18.6796 1.42083C17.6521 0.478818 16.2896 0.0078125 14.927 0.0078125C13.5645 0.0078125 12.2019 0.478818 11.1744 1.42083L10.3033 2.21949L9.40983 1.42083C8.38233 0.478818 7.01979 0.0078125 5.65725 0.0078125C4.25003 0.0078125 2.86515 0.519775 1.81532 1.52322C-0.194989 3.4482 -0.060968 6.51997 1.99402 8.40399L9.67787 15.4486C10.0353 15.7762 10.5937 15.7762 10.9287 15.4486L18.6796 8.34256C20.7346 6.41758 20.7346 3.32533 18.6796 1.42083Z" /></svg>
        </span>
      </footer>
    </>
  );
}

export default App;
