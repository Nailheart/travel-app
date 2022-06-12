/** TODO:
  містить назву, тривалість та складність подорожі
  форма містить такі поля:
    Date - запланована дата, має бути в майбутньому
    Number of guest -- кількість гостей, має бути від 1 до 10 включно - кінцева ціна дорівнює ціні помноженій на кількість гостей - при натисканні кнопки у верхньому правому кутку форма закривається
*/
function Modal(props) {
  return (
    <div className="modal" hidden>
      <div className="trip-popup">
        <button className="trip-popup__close">×</button>
        <form className="trip-popup__form" autoComplete="off">
          <div className="trip-info">
            <h3 className="trip-info__title">Iceland</h3>
            <div className="trip-info__content">
              <span className="trip-info__duration"><strong>15</strong> days</span>
              <span className="trip-info__level">easy</span>
            </div>
          </div>
          <label className="trip-popup__input input">
            <span className="input__heading">Date</span>
            <input name="date" type="date" required />
          </label>
          <label className="trip-popup__input input">
            <span className="input__heading">Number of guests</span>
            <input name="guests" type="number" min="1" max="10" value="1" required />
          </label>
          <span className="trip-popup__total">
            Total: <output className="trip-popup__total-value">4000$</output>
          </span>
          <button className="button" type="submit">Book a trip</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;