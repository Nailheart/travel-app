import { useLocation, Routes, Route, } from "react-router-dom";
import Header from "./components/Header/Header";
import SingIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Filter from "./components/Filter/Filter";
import Trips from "./components/Trips/Trips";
import Bookings from "./components/Bookings/Bookings";
import "./assets/css/style.css";

// TODO: add webpack
// TODO: use db
/** TODO:
  Додаток повинен містити такі сторінки:
    /sign-up - сторінка регістрації
    /sign-in - сторінка логіну
    / - головна сторінка з карточками усіх поїздок, пошуком та фільтрами
    /trip/:tripId - сторінка з інформацією про поїздку
    /bookings - список бронювань поточного користувача
*/
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/sign-in" element={ <SingIn /> } />
        <Route path="/sign-up" element={ <SignUp /> } />
        <Route path="/bookings" element={ <Bookings /> } />
        {/* TODO: add route to trip */}
        {/* <Route path="/trip/:tripId" element={ <Trip /> } /> */}
        <Route 
          path="*"
          element= {
            <main>
              <h1 className="visually-hidden">Travel app</h1>
              <Filter />
              <Trips />
            </main>
          }
        />
      </Routes>
      <footer className="footer">
        <span className="footer__text">
          from
          <a className="footer__link" href="https://binary-studio.com">binary studio</a>
          with
          <svg className="footer__icon" width="21" height="16" viewBox="0 0 21 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M18.6796 1.42083C17.6521 0.478818 16.2896 0.0078125 14.927 0.0078125C13.5645 0.0078125 12.2019 0.478818 11.1744 1.42083L10.3033 2.21949L9.40983 1.42083C8.38233 0.478818 7.01979 0.0078125 5.65725 0.0078125C4.25003 0.0078125 2.86515 0.519775 1.81532 1.52322C-0.194989 3.4482 -0.060968 6.51997 1.99402 8.40399L9.67787 15.4486C10.0353 15.7762 10.5937 15.7762 10.9287 15.4486L18.6796 8.34256C20.7346 6.41758 20.7346 3.32533 18.6796 1.42083Z" /></svg>
        </span>
      </footer>
    </>
  );
}

export default App;
