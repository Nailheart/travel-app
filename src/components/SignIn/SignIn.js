import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { login } from "../../store/user/userSlice";

function SingIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password }
    dispatch(login(user));
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  });

  return (
    <main className="sign-in-page">
      <form 
        className="sign-in-form"
        onSubmit={handleSubmit}
      >
        <h1 className="sign-in-form__title">Sign In</h1>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input
            name="email"
            type="email"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input
            name="password"
            type="password"
            pattern=".{3,20}"
            autoComplete="new-password"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <input 
          className="button"
          type="submit"
          value="Sign In"
        />
      </form>
      <span>
        Already have an account? <Link className="sign-in-form__link" to='/sign-up'>Sign Up</Link>
      </span>
    </main>
  );
}

export default SingIn;