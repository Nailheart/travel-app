function BookingsItems(props) {
  const { title, qtyGuests, date, totalPrice } = props;
  const guests = qtyGuests > 1 ? qtyGuests + ' guests' : qtyGuests + ' guest';
  
  return (
    <li className="booking">
      <h2 className="booking__title">{title}</h2>
      <span className="booking__guests">{guests}</span>
      <span className="booking__date">{date}</span>
      <span className="booking__total">{totalPrice}</span>
      <button className="booking__cancel" type="button" title="Cancel booking">
        <span className="visually-hidden">Cancel booking</span>
        ×
      </button>
    </li>
  );
}

export default BookingsItems;