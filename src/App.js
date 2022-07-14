import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import SingIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Layout from "./components/Layout/Layout"
import Index from "./components/Index/Index";
import Trip from "./components/Trips/Trip";
import Bookings from "./components/Bookings/Bookings";
import "./assets/css/style.css";

function App() {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route 
          index
          element={ isAuth ? <Index /> : <Navigate to="/sign-in" /> }
        />
        <Route 
          path="/sign-in"
          element={ <SingIn /> }
        />
        <Route 
          path="/sign-up"
          element={ <SignUp /> } 
        />
        <Route 
          path="/bookings"
          element={ isAuth ? <Bookings /> : <Navigate to="/sign-in" /> }
        />
        <Route 
          path="/trip/:tripId"
          element={ isAuth ? <Trip /> : <Navigate to="/sign-in" /> }
        />
        <Route 
          path="*"
          element={ isAuth ? <Index /> : <Navigate to="/sign-in" /> }
        />
      </Route>
    </Routes>
  );
}

export default App;
