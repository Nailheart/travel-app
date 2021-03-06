import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { fetchTrip } from "../../store/trips/tripsSlice";
import { addBooking } from "../../store/bookings/bookingsSlice";

function Trip() {
  const dispatch = useDispatch();
  const { token } = useAuth();
  const { tripId } = useParams();
  const data = {
    id: tripId,
    token
  }
  const trip = useSelector(state => state.trips.trip);

  useEffect(() => {
    dispatch(fetchTrip(data));
  }, [dispatch]);

  const { image, title, duration, level, description, price } = trip;
  const [showModal, setShowModal] = useState(false);
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  function setCurrentDate() {
    const date = new Date();
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const month = date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const changeHandler = (e) => {
    setGuests(e.currentTarget.value)
    setTotalPrice(e.currentTarget.value * price);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add booking
    // dispatch(addBooking(trip));
  }

  return (
    <>
      <main className="trip-page">
        <h1 className="visually-hidden">Trip</h1>
        <div className="trip">
          <img className="trip__img" src={image} alt="trip" />
          <div className="trip__content">
            <div className="trip-info">
              <h3 className="trip-info__title">{title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration"><strong>{duration}</strong> days</span>
                <span className="trip-info__level">{level}</span>
              </div>
            </div>
            <div className="trip__description">{description}</div>
            <div className="trip-price">
              <span>Price</span>
              <strong className="trip-price__value">{price}</strong>
            </div>
            <button 
              className="trip__button button"
              onClick={toggleModal}
              type="button"
            >
              Book a trip
             </button>
          </div>
        </div>
      </main>

      <div className="modal" style={{display: showModal ? "" : "none"}}>
        <div className="trip-popup">
          <button className="trip-popup__close" onClick={toggleModal}>??</button>
          <form 
            className="trip-popup__form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="trip-info">
              <h3 className="trip-info__title">{title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration"><strong>{duration}</strong> days</span>
                <span className="trip-info__level">{level}</span>
              </div>
            </div>
            <label className="trip-popup__input input">
              <span className="input__heading">Date</span>
              <input name="date" type="date" min={setCurrentDate()} required />
            </label>
            <label className="trip-popup__input input">
              <span className="input__heading">Number of guests</span>
              <input 
                name="guests"
                type="number"
                min="1"
                max="10"
                pattern="[0-9]{1,10}"
                value={guests}
                required 
                onChange={changeHandler}
              />
            </label>
            <span className="trip-popup__total">
              Total: <output className="trip-popup__total-value">{totalPrice}</output>
            </span>
            <button className="button" type="submit">Book a trip</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Trip;