import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Form as LoginForm } from '../app/javascript/packs/react/components/LogIn'

storiesOf('Login Form', module)
  .add('default', () => (
    <MuiThemeProvider>
      <LoginForm />
    </MuiThemeProvider>
  ))
  .add('with an error', () => (
    <MuiThemeProvider>
      <LoginForm errors={["Email and Password don't match"]} />
    </MuiThemeProvider>
  ))
