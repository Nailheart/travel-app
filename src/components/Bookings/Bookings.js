import BookingsItems from "./BookingsItem";
import data from "../../dataBookings.json";

// TODO: get data from store
function Bookings() {
  const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Bookings</h1>
      <ul className="bookings__list">
        { sortedData.map((item) => {
          return (
            <BookingsItems
              booking={item}
              key={item.id}
            />
          );
        }) }
      </ul>
    </main>
  );
}

export default Bookings;