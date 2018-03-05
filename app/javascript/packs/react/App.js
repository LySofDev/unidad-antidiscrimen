import React from 'react'
import ReactDOM from 'react-dom'
import { withContext } from 'recompose'
import PropTypes from 'prop-types'
import ApolloClientProvider from './components/ApolloClientProvider'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default () => (
  <ApolloClientProvider>
    <MuiThemeProvider>
      <div>
        <h1>Unidad Antidiscrimen</h1>
        <TextField hintText="Email" floatingLabelText="Email" />
        <br />
        <TextField hintText="Password" floatingLabelText="Password" type="password" />
        <br />
        <RaisedButton label="Sign In" primary />
      </div>
    </MuiThemeProvider>
  </ApolloClientProvider>
)
