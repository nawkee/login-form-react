import React, { useState } from "react";
import FormInput from "../form-input/FormInput";

import "./form.css";

const handleClick = (email, password) => {
  if (!email && !password) {
    alert("Email&Password required");
    return;
  } else if (!email) {
    alert("Email required");
    return;
  } else if (!password) {
    alert("Password required");
    return;
  }
  alert(`email: ${email}\npassword: ${password}`);
};

const Form = ({ label, btnText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form">
      <h1 className="header">{label.toUpperCase()}</h1>
      <FormInput
        name="email"
        type="email"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        label="email"
        required
      />
      <FormInput
        name="password"
        type="password"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
        label="password"
        required
      />
      <button
        onClick={() => handleClick(email, password)}
        className="login-btn"
      >
        {btnText}
      </button>
      <h3 className="additional forgot">
        <a href="#">Forgot your password?</a>
      </h3>
      <h3 className="additional register">
        Don`t have an account yet? <a href="#">Register</a>
      </h3>
    </div>
  );
};

export default Form;
