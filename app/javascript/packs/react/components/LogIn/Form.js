import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import { RED } from '../../constants'

const styles = {
  container: {
    padding: "1rem",
    display: "inline-block"
  },
  error: {
    padding: "1rem",
    background: RED,
    color: "white"
  }
}

export default function(props) {

  const ErrorMessages = () => {
    if (props.errors && props.errors.length > 0) {
      return (
        <Paper style={styles.error}>{props.errors[0]}</Paper>
      )
    }
    return null
  }

  return (
    <Paper style={styles.container}>
      <ErrorMessages />
      <TextField hintText="Email" floatingLabelText="Email" />
      <br />
      <TextField hintText="Password" floatingLabelText="Password" type="password" />
      <br />
      <RaisedButton label="Sign In" primary />
    </Paper>
  )
}
