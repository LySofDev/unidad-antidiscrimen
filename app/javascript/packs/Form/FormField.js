import React from 'react'
import TextField from 'material-ui/TextField'

export default props => (
  <TextField
    value={props.value}
    onChange={event => props.onChange(event.target.value)}
    hintText={props.title}
    floatingLabelText={props.title}
    type={props.type}
  />
)
