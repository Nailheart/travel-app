import BookingsItems from "./BookingsItem";

/** TODO:
  список з бронюваннями
    - карточки повинні сортуватися за датою від найближчої до найдальшої
  карточка бронювання містить:
    - назву подорожі
    - інформацію про бронювання - кількість гостей, заплановану дату, кінцеву ціну
    - кнопку для відміни бронювання у верхньому правому кутку - при натисканні карточка повинна зникати зі списку
*/
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