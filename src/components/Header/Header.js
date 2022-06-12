import { useLocation, Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";

function Header() {
  let location = useLocation();
  let showHeaderNav = true;
  if (location.pathname === '/sign-in') showHeaderNav = false;
  if (location.pathname === '/sign-up') showHeaderNav = false;

  return (
    <header className="header">
      <div className="header__inner">
        <Link className="header__logo" to="/">Travel App</Link>
        {showHeaderNav ? <HeaderNav /> : null}
      </div>
    </header>
  );
}

export default Header;