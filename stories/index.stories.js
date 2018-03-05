import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Form as LoginForm } from '../app/javascript/packs/react/components/LogIn'


import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

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
