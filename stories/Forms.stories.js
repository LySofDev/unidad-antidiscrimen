import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import LoginForm from '../app/javascript/packs/react/components/LogIn/Form'

storiesOf('Login Form', module)
  .add('default', () => (
    <MuiThemeProvider>
      <LoginForm
        form={{ email: "", password: ""}}
      />
    </MuiThemeProvider>
  ))
  .add('with enterred data', () => (
    <MuiThemeProvider>
      <LoginForm
        form={{ email: "test@gmail.com", password: "password "}}
      />
    </MuiThemeProvider>
  ))
  .add('with an error', () => (
    <MuiThemeProvider>
      <LoginForm
        form={{ email: "test@gmail.com", password: "password "}}
        errors={["Email and Password wont match"]}
      />
    </MuiThemeProvider>
  ))
