import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "notexist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-form">
        <h2>Signup</h2>
        <form action="POST" style={{ textAlign: "center" }}>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input
            className="btn-outline-secondary"
            type="submit"
            onClick={submit}
          />
        </form>
        {/* <form action="POST" style={{ textAlign: "center" }}>
          <input
            type="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button
            className="btn-outline-secondary"
            type="submit"
            onClick={submit}
          >
            Register
          </button>
        </form> */}
        <p>OR</p>
        <Link className="btn-google" to="/login">
          Login ?
        </Link>
      </div>
      <div className="signup-image">
        <img
          src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tZW4tZmFzaGlvbnx8fHx8fDE2OTIzNDc4NDk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900"
          alt="Signup"
          className="signup-image"
        />
      </div>
    </div>
  );
}

export default Signup;
