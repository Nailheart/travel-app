import { Link } from "react-router-dom";

function SignUp() {
  return (
    <main className="sign-up-page">
      <form className="sign-up-form" autoComplete="off">
        <h1 className="sign-up-form__title">Sign up</h1>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input name="full-name" type="text" required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input name="email" type="email" required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input name="password" type="password" autoComplete="new-password" required />
        </label>
        <input className="button" type="submit" value="Sign Up" />
      </form>
      <span>
        Already have an account? <Link className="sign-up-form__link" to='/sign-in'>Sign In</Link>
      </span>
    </main>
  );
}

export default SignUp;