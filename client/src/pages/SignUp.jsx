import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2626/register", { name, email, password })
      .then((result) => {
        console.log(result);
        
        if (result ) {
            enqueueSnackbar("Registration successful! Please login.", {
              variant: "success", autoHideDuration: 2000
            });
            // navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <form className="input-container" onSubmit={handleSubmit}>
        <h1>Sign up Here</h1>

        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="please enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          Already have an account? Login <Link to="/login">here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
