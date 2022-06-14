import { useState } from "react";
import Trips from "../Trips/Trips";

const Index = (props) => {
  const [search, setSearch] = useState('');
  const [duration, setDuration] = useState('');
  const [level, setLevel] = useState('');

  function filterDuration(search, duration, level) {
    let data = props.trips;

    // TODO: искать совпадения только с первого символа
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
      {props.trips.length ? <Trips trips={filterDuration(search, duration, level)} /> : null}
    </main>
  );
}

export default Index;