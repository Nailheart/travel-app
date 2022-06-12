function Trip(props) {
  const { img, title, duration, level, desc, price } = props;

  return (
    <>
      <h1 className="visually-hidden">Trip</h1>
      <div className="trip">
        {/* TODO: fix img */}
        <img className="trip__img" src={img} alt="trip image" />
        <div className="trip__content">
          <div className="trip-info">
            <h3 className="trip-info__title">{title}</h3>
            <div className="trip-info__content">
              <span className="trip-info__duration"><strong>{duration}</strong> days</span>
              <span className="trip-info__level">{level}</span>
            </div>
          </div>
          <div className="trip__description">{desc}</div>
          <div className="trip-price">
            <span>Price</span>
            <strong className="trip-price__value">{price}</strong>
          </div>
          <button className="trip__button button">Book a trip</button>
        </div>
      </div>
    </>
  );
}

export default Trip;