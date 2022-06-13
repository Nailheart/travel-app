function BookingsItems(props) {
  const { guests, date, trip, totalPrice } = props.booking;
  const qtyGuests = guests > 1 ? guests + ' guests' : guests + ' guest';
  
  function formatDate(date) {
    const newDate = new Date(date);
    const day = newDate.getDate() > 9 ? newDate.getDate() : `0${newDate.getDate()}`;
    const month = newDate.getMonth() > 9 ? newDate.getMonth() + 1 : `0${newDate.getMonth() + 1}`;
    const year = newDate.getFullYear();
    return `${day}.${month}.${year}`;
  }

  function removeBooking(e) {
    const element = e.currentTarget.parentElement;
    element.remove();
  }

  return (
    <li className="booking">
      <h2 className="booking__title">{trip.title}</h2>
      <span className="booking__guests">{qtyGuests}</span>
      <span className="booking__date">{formatDate(date)}</span>
      <span className="booking__total">{totalPrice} $</span>
      <button className="booking__cancel" onClick={removeBooking} type="button" title="Cancel booking">
        <span className="visually-hidden">Cancel booking</span>
        ×
      </button>
    </li>
  );
}

export default BookingsItems;