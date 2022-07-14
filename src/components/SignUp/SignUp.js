import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { register } from "../../store/user/userSlice";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { fullName, email, password };
    dispatch(register(user));
  }

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  });

  return (
    <main className="sign-up-page">
      <form 
        className="sign-up-form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1 className="sign-up-form__title">Sign up</h1>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input 
            name="full-name"
            type="text"
            required
            onChange={e => setFullName(e.target.value)}
          />
        </label>
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
          value="Sign Up"
        />
      </form>
      <span>
        Already have an account? <Link className="sign-up-form__link" to='/sign-in'>Sign In</Link>
      </span>
    </main>
  );
}

export default SignUp;