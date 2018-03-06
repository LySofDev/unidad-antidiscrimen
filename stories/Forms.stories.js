import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import LoginForm from '../app/javascript/packs/LogIn/Form'
import StoriesProvider from '../app/javascript/packs/StoriesProvider'

storiesOf('Login Form', module)
  .add('default', () => (
    <StoriesProvider>
      <LoginForm
        form={{ email: "", password: ""}}
      />
    </StoriesProvider>
  ))
  .add('with enterred data', () => (
    <StoriesProvider>
      <LoginForm
        form={{ email: "test@gmail.com", password: "password "}}
      />
    </StoriesProvider>
  ))
  .add('with an error', () => (
    <StoriesProvider>
      <LoginForm
        form={{ email: "test@gmail.com", password: "password "}}
        errors={["Email and Password wont match"]}
      />
    </StoriesProvider>
  ))
