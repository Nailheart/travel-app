import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrips } from "../../store/trips/tripsSlice";
import { useAuth } from "../../hooks/useAuth";
import Trips from "../Trips/Trips";

const Index = () => {
  const dispatch = useDispatch();
  const trips = useSelector(state => state.trips.trips);
  const { token } = useAuth();
  const [search, setSearch] = useState('');
  const [duration, setDuration] = useState('');
  const [level, setLevel] = useState('');

  useEffect(() => {
    dispatch(fetchTrips(token));
  }, [dispatch]);

  const filterDuration = (search, duration, level) => {
    let data = trips;

    if (search) {
      const re = new RegExp('' + search + '','i');
      data = data.filter((item) => item.title.match(re));
    }

    if (level) {
      data = data.filter((item) => item.level === level);
    }

    switch(duration) {
      case '0_x_5':
        data = data.filter((item) => item.duration < 5);
        break;
      case '5_x_10':
        data = data.filter((item) => item.duration >= 5 && item.duration < 10);
        break;
      case '10_x':
        data = data.filter((item) => item.duration >= 10);
        break;
      default:
        break;
    }

    return data;
  }

  return (
    <main>
      <h1 className="visually-hidden">Travel app</h1>
      <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form" autoComplete="off">
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input name="search" onChange={(e) => setSearch(e.currentTarget.value)} type="search" placeholder="search by title" />
          </label>
          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select name="duration" onChange={(e) => setDuration(e.currentTarget.value)}>
              <option value="">duration</option>
              <option value="0_x_5">&lt; 5 days</option>
              <option value="5_x_10">5 &gt; 10 days</option>
              <option value="10_x">&ge; 10 days</option>
            </select>
          </label>
          <label className="select">
            <span className="visually-hidden">Search by level</span>
            <select name="level" onChange={(e) => setLevel(e.currentTarget.value)}>
              <option value="">level</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </label>
        </form>
      </section>
      {trips.length ? <Trips trips={filterDuration(search, duration, level)} /> : null}
    </main>
  );
}

export default Index;