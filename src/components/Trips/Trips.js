import TripItem from "./TripItem";
import img from "../../assets/images/iceland.jpg";

// TODO: take props from db
function Trips(props) {
  return (
    <section className="trips">
      <h2 className="visually-hidden">Trips List</h2>
      <ul className="trip-list">
        <TripItem 
          img={img}
          title="Island"
          duration="15"
          level="easy"
          price="7000 $"
        />
        <TripItem 
          img={img}
          title="Greenland"
          duration="7"
          level="moderate"
          price="4000 $"
        />
        <TripItem 
          img={img}
          title="Costa Rica"
          duration="7"
          level="easy"
          price="3000 $"
        />
        <TripItem 
          img={img}
          title="Canada"
          duration="3"
          level="difficult"
          price="5000 $"
        />
      </ul>
    </section>
  )
}

export default Trips;