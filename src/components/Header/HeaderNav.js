import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../store/user/userSlice";

function HeaderNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate('/sing-in');
  };

  return (
    <nav className="header__nav">
      <ul className="nav-header__list">
        <li className="nav-header__item" title="Bookings">
          <Link className="nav-header__inner" to="/bookings">
            <span className="visually-hidden">Bookings</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#242a3a"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z"></path></svg>
          </Link>
        </li>
        <li className="nav-header__item" title="Profile">
          <div className="nav-header__inner profile-nav" tabIndex="0">
            <span className="visually-hidden">Profile</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#242a3a"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
            <ul className="profile-nav__list">
              <li className="profile-nav__item profile-nav__username">{user?.fullName}</li>
              <li className="profile-nav__item">
                <button 
                  className="profile-nav__sign-out button"
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;