import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default props => (
  <div>
    <h1>Unidad Antidiscrimen</h1>
    <TextField hintText="Email" floatingLabelText="Email" />
    <br />
    <TextField hintText="Password" floatingLabelText="Password" type="password" />
    <br />
    <RaisedButton label="Sign In" primary />
  </div>
)
