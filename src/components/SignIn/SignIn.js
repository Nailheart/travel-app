import { Link } from "react-router-dom";

/** TODO: 
  - форма містить такі поля:
    - Email
    - Password - має бути від 3 до 20 символів
  - усі поля є обов’язковими
  - кнопка Sign Up веде на сторінку /sign-up
*/
function SingIn() {
  return (
    <main className="sign-in-page">
      <form className="sign-in-form">
        <h1 className="sign-in-form__title">Sign In</h1>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input name="email" type="email" required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input name="password" type="password" autoComplete="new-password" required />
        </label>
        <input className="button" type="submit" value="Sign In" />
      </form>
      <span>
        Already have an account? <Link className="sign-in-form__link" to='/sign-up'>Sign Up</Link>
      </span>
    </main>
  );
}

export default SingIn;