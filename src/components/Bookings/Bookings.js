import BookingsItems from "./BookingsItem";

function Bookings() {
  // TODO: remove element from list
  // handleClick() {}

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Bookings</h1>
      <ul className="bookings__list">
        <BookingsItems
          title="Iceland"
          qtyGuests="2"
          date="13.07.2022"
          totalPrice="14000 $"
        />
        <BookingsItems
          title="Iceland"
          qtyGuests="2"
          date="30.09.2022"
          totalPrice="14000 $"
        />
        <BookingsItems
          title="Iceland"
          qtyGuests="2"
          date="10.11.2022"
          totalPrice="14000 $"
        />
      </ul>
    </main>
  );
}

export default Bookings;