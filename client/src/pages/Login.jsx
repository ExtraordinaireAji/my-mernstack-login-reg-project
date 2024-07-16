import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2626/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") navigate("/Dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <form className="input-container" onSubmit={handleSubmit}>
        <h1>Login Here</h1>

        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="please enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="please enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign up</button>
        <p>
          Don't have an account? sign up <Link to='/register'>here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

