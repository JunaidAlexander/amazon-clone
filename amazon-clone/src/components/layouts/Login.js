import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);


useEffect(() => {
console.log("useEffect");
}, [email, password]
)

  useEffect(() => {
    setFormIsValid(email.includes("@") && password.trim().length > 6);
  }, [email, password]);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setFormIsValid(event.target.value.includes("@") && password.trim().length > 6);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    setFormIsValid(email.includes("@") && event.target.value.trim().length > 6);
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log("formValid", formIsValid);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZkAAAB7CAMAAACRgA3BAAAAz1BMVEX///8iHx//mQAAAAD/lwAZFRUfHBz/lQDw8PD/kwD8/PzS0dEGAAD/kgAcGRn5+flubW3h4eEQCgqQj4+7urra2tpIRkYVEREvLS3x8fHn5+dzcnKFhIQrKCjh4OCxsLClpKRlZGSKiYmfnp5SUFDAv79MSkrMzMyPjo7/9uv/+/ReXFw1MzNZWFizs7P/6tP/16z/rkz/yY7/wX3/tWE9Ozv/4sL/s1v/pC3/3bn/umr/oB3/06b/wHv/xYj/y5T/qT3/6M//pzb/4MD/8d7GyNzHAAAURUlEQVR4nO1d6ULqSgwWhhYKpUAVK4vKIi4IKu4CAnp5/2e6bdlmksy0bKIev3/n2HaWL8kkmcywt0cik2/UL8vV67Pranm/clGknwqNRO6kmAl8IrnsZwupm3qtVG23r7Pl/dNUYuX+rYhEMVfcRKOZ4kkuzHcKB+UWY8x2HM2yLM2xTcbMamVFdjIHpSfmw27XT8j2bkqtyRPH2fCtFE+zltsv29EWvYyUDgrqt5LhofxOoVFra5NOM6tdawQ0q8BF7Xz6nafSgVJ6G9eMOVYEQNdMdn4qfzGRPeTQvpj/f9mcf03XbHZ2Ad/MZ9329OkTjsna6AkCmco5M2dvcb10GKuq3i+Z4VGScpO5abtypumRxbhYWzE5rhhV+em5zs//UDlm9myyLbf3JZlkJuvHTIPjnUFj9hx/9FFUaEekd7b3bXucHj1V8spVAH0sh6G8dwvd3lZjRlQGSCXhnGr0Go+SCD10WEFzEbm3dY+XJg8XthHYm8rSJIijEQeVmDMbOZbbCaO9MJO3SmFgrR2IMhik2CVT5RimPEf8sUuZisOgjyJjOp2WiNdoqVWg4HKsXE5yVqsgTCzYfOW9TwkEx2uV8Zw6SSfFw+jzk0ZjyxjMLAZqQOK1pUewohovY15PT6CfJhKIEfajQa4qgech3UjEMfTl+FXBijYgYYMQdTI61GH4aAFw3wmVlQf2Jd0zrWWqm6LyjTwtTGuZLRyGyEQr1VV5nF9y8v6/yIQ3uT+DHtD8jZCHoPOI4Vimli7ZZwOJ+MfnW4nX0QStS5gnaukktRllS6pozHQFSYS/wyYZNL3WgpXXfWcbseWEmLk+3M16iHDF6UQqbrgWlHLStcNlqtWYYgddRZ2sF1JYs2bGrXOh7MeSI4u1M4P6G/5XTqNqZ0b1wnr7rq2qn64lVVHVjph3K36WcdkQK1c5BlrNT8LsOh7Uq+6CXXoIgJTOlyqn+kDsK1pUewYhJs1d8tbG/LFKZC1QnrmjZtrm6qSTOjAeP6dOr50Xx2Hd9u2f8L1Q+EdCoh6j2EEviKK9PjhAs2XVr48vS8a9KkQuxqnG8+DgNv46JXOoxdn3mIuslAMasRErNfX3fxZukxQu3DFajNyk8xxAeW0dZ5L6Y8SOUnrwnjRVBydKFcfWuLwKh7UmDe9OHbn77FIV0OZkUdpy3JfKUjDY+mhGxGkhqVLiJHo7gS6sywLGJhLMHJt1BtF7aycGo6zGoS55PMfTeIWdPJtSc5gs2WWi0TCATRudzZ2PEf+MmZ1hzGfiK/Wi0e5KSg+e6zvkkU2bMbksWJ3vYjxHgks4TYNEo0/jKoqKTGK+SCD10CEjPSIAehh1KJl40SlXHySYPHeMypJ8hGJHjjmETScpHVHuMcoiTMNBkVch6i2Wnn+dzRTY8sVTLXcw6ilx1nmYQbkgwKCTYaEeOJOj2EyjplkRaVXW2JehyfpVjHc4pmCv6/wXpOOlU/9n1a+w7gMj6DcXjrBzYJkkfNzlD0h7iECfS3uQRfURB5YZRi6kmAQYb6wvx6zObJDN/4L8OGqecQSYAAAAASUVORK5CYII=
"
          alt=""
        />
      </Link>
      <div className="Login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={emailChangeHandler}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
            disabled={!formIsValid}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the COMPANY NAME Conditions of Use &amp;
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton">
          Create your Account
        </button>
      </div>
    </div>
  );
};

export default Login;
