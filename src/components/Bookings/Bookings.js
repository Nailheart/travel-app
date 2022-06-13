import BookingsItems from "./BookingsItem";
import data from "../../dataBookings.json";

/** TODO:
  список з бронюваннями
    - карточки повинні сортуватися за датою від найближчої до найдальшої
  карточка бронювання містить:
    - назву подорожі
    - інформацію про бронювання - кількість гостей, заплановану дату, кінцеву ціну
    - кнопку для відміни бронювання у верхньому правому кутку - при натисканні карточка повинна зникати зі списку
*/
function Bookings() {
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Bookings</h1>
      <ul className="bookings__list">
        { data.map((item) => {
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