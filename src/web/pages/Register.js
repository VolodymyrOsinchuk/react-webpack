import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { userServise } from "../../auth/user.service";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log('props', props);

  function handleChangeEmail (event) {
    setEmail(event.target.value);
  }

  function handleChangePassword (event) {
    setPassword(event.target.value);
  }

  const clickSubmit = (event) => {
  console.log('event >>>>>>', event);
    event.preventDefault();
   userServise.login(email, password)
    .then(user => {
      console.log('user >>>>>>', user);
      props.history.push("/profle")
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
         Creez votre compte
        </Typography>
        <form className={classes.form} onSubmit={clickSubmit} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleChangeEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChangePassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={onSignIn}
          >
          S'enregistrer
          </Button>
          <Grid container justify="center">
            <Grid item >
              <Link to="/login" variant="body2">
                {"Vous avez de compte? Conectez-vous"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}