import React, { useState } from "react";
import { Box, Button, FormGroup, TextField } from "@material-ui/core";

import "./form.css";

const handleClick = (email, password) => {
  alert(`email: ${email}\npassword: ${password}`);
};

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  return (
    <FormGroup className="form">
      <h2 className="header">LOGIN</h2>
      <div className="inputs">
        <div className="my-input">
          <TextField
            className="input"
            label="email"
            helperText={emailError ? "Email required" : ""}
            variant="outlined"
            fullWidth
            error={emailError}
            onChange={(e) => {
              setEmailError(false);
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="my-input">
          <TextField
            className="input"
            label="password"
            helperText={passwordError ? "Password required" : ""}
            variant="outlined"
            fullWidth
            error={passwordError}
            onChange={(e) => {
              setPasswordError(false);
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
      </div>
      <Box m={2} />
      <Button
        disabled={emailError || passwordError}
        className="login-btn"
        onClick={() => {
          if (!email) setEmailError(true);
          if (!password) setPasswordError(true);
          if (email && password) handleClick(email, password);
        }}
      >
        LOG IN
      </Button>
      <h3 className="additional forgot">
        <a href="#">Forgot your password?</a>
      </h3>
      <h3 className="additional register">
        Don`t have an account yet? <a href="#">Register</a>
      </h3>
    </FormGroup>
  );
};

export default Form;
