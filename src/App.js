import { Routes, Route } from "react-router-dom";
import SingIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Layout from "./components/Layout/Layout"
import Index from "./components/Index/Index";
import Trip from "./components/Trips/Trip";
import Bookings from "./components/Bookings/Bookings";
import dataTrips from "./dataTrips.json";
import "./assets/css/style.css";

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
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Index /> } />
          <Route path="/sign-in" element={ <SingIn /> } />
          <Route path="/sign-up" element={ <SignUp /> } />
          <Route path="/bookings" element={ <Bookings /> } />
          <Route path="/trip/:tripId" element={ <Trip trips={dataTrips} /> } />
          <Route path="*" element={ <Index /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
