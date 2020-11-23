import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexWRap: "wrap",
    flexDirection: "row",
    background: "white",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginRight: "5px",
    marginLeft: "5px",
    borderRadius: "4px",
    boxShadow: "20 px 20px 10px #888888",
    width: "200px",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
  },
  element: {
    display: "block",
    alignItems: "center",
    textAlign: "center",
    margin: "10px",
    padding: "0px",
  },
  button: {
    textAlign: "center",
    width: "100%",
  },
});

function Login() {
  const classes = useStyles();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return login.length > 0 && password.length > 0;
  }

  function onChangeLogin(e) {
    setLogin(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Box className={classes.box} boxShadow={2}>
        <form onSubmit={onSubmit}>
          <FormControl
            className={classes.element}
            component="fieldset"
            variant="filled"
          >
            <FormLabel className={classes.element} component="legend">
              Login
            </FormLabel>
            <TextField
              className={classes.element}
              value={login}
              onChange={onChangeLogin}
            />
          </FormControl>
          <FormControl
            type={password}
            className={classes.element}
            component="fieldset"
            variant="filled"
          >
            <FormLabel className={classes.element} component="legend">
              Hasło
            </FormLabel>
            <TextField
              className={classes.element}
              value={password}
              onChange={onChangePassword}
            />
          </FormControl>
          <Button
            type="submit"
            className={classes.button}
            disabled={!validateForm()}
          >
            Zaloguj się
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Login;
