import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://didactic-goggles-v4r49xx9pr7369wr-8080.app.github.dev/signup",
        {
          username,
          email,
          password,
        }
      );

      console.log("Response:", res.data);

      // Clear form after successful submission
      setUsername("");
      setEmail("");
      setPassword("");

      alert("Signup successful!");
    } catch (err) {
      console.error("Error:", err);

      alert(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
        <Header />
        <div className="center-container">
        <form className="form-card" onSubmit={sendData}>
            <h2>Create Account</h2>

            <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>

            <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>

            <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>

            <button type="submit" className="submit-btn">
            Submit
            </button>
        </form>
        </div>
        <Footer />
    </>
  );
}

export default Register;