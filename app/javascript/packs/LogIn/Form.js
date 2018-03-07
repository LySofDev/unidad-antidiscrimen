import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import Errors from '../Errors'

const styles = {
  container: {
    padding: "1rem",
    display: "inline-block"
  },
  primary: {
    marginRight: "0.25rem"
  },
  secondary: {
    marginLeft: "0.25rem"
  }
}

export default props => (
  <Paper style={styles.container}>
    <Errors errors={props.errors} />
    <TextField
      value={props.form.email}
      onChange={event => props.onUpdate('email', event.target.value)}
      hintText="Email"
      floatingLabelText="Email"
    />
    <br />
    <TextField
      value={props.form.password}
      onChange={event => props.onUpdate('password', event.target.value)}
      hintText="Password"
      floatingLabelText="Password"
      type="password"
    />
    <br />
    <RaisedButton
      label="Sign In"
      primary
      style={styles.primary}
      onClick={props.onSubmit}
    />
    <FlatButton
      label="Not registered yet"
      secondary
      style={styles.secondary}
      onClick={event => window.location.href = "http://localhost:3000/users/sign_up"}
      />
  </Paper>
)
