import { Link } from "react-router-dom";

/** TODO: 
  - форма містить такі поля:
    - Full name
    - Email
    - Password - має бути від 3 до 20 символів
  - усі поля є обов’язковими
  - кнопка Sign In веде на сторінку /sign-in
*/
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
          <input name="password" type="password" pattern=".{3,20}" autoComplete="new-password" required />
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