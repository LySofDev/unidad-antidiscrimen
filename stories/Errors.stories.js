import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Errors from '../app/javascript/packs/react/components/Errors'

storiesOf('Errors', module)
  .add('with a single error', () => (
    <MuiThemeProvider>
      <Errors errors={["A single error"]} />
    </MuiThemeProvider>
  ))
  .add('with multiple errors', () => (
    <MuiThemeProvider>
      <Errors errors={["A first error", "A second error"]} />
    </MuiThemeProvider>
  ))
