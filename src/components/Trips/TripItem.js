import { Link } from "react-router-dom";

/** TODO:
  картка подорожі містить такі елементи:
    - картинка
    - назва подорожі
    - інформація про подорож - тривалість та складність
    - ціна подорожі
    - кнопка, що веде на сторінку подорожі
*/
function TripItem(props) {
  const { img, title, duration, level, price } = props;

  return (
    <li className="trip-card">
      {/* TODO: fix img src */}
      <img src={img} alt="trip image" />
      {/* <img src={`./assets/images/${img}`} alt="trip image" /> */}
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 className="trip-info__title">{title}</h3>
          <div className="trip-info__content">
            <span className="trip-info__duration"><strong>{duration}</strong> days</span>
            <span className="trip-info__level">{level}</span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong className="trip-price__value">{price}</strong>
        </div>
      </div>
      {/* TODO: передавать props по клику */}
      <Link className="button" to={`/${title.split(' ').join('')}`}>Discover a trip</Link>
    </li>
  )
}

export default TripItem;