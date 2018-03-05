import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import Errors from '../Errors'

const styles = {
  padding: "1rem",
  display: "inline-block"
}

export default props => (
  <Paper style={styles}>
    <Errors errors={props.errors} />
    <TextField hintText="Email" floatingLabelText="Email" />
    <br />
    <TextField hintText="Password" floatingLabelText="Password" type="password" />
    <br />
    <RaisedButton label="Sign In" primary />
  </Paper>
)
