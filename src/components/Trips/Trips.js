import TripItem from "./TripItem";

function Trips(props) {
  return (
    <section className="trips">
      <h2 className="visually-hidden">Trips List</h2>
      <ul className="trip-list">
        { props.trips.map((trip) => {
          return (
            <TripItem
              trip={trip}
              key={trip.id}
            />
          );
        }) }
      </ul>
    </section>
  )
}

export default Trips;