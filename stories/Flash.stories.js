import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Flash, FlashProvider, withUpdateFlash } from '../app/javascript/packs/react/components/Flash'
import RaisedButton from 'material-ui/RaisedButton'

const ShowFlash = withUpdateFlash(({ updateFlash }) => (
  <RaisedButton label="Show Flash" onClick={event => updateFlash("Flash activated!")} />
))

storiesOf('Flash', module)
  .add('default', () => (
    <MuiThemeProvider>
      <FlashProvider>
        <Flash />
      </FlashProvider>
    </MuiThemeProvider>
  ))
  .add('with a new flash message', () => (
    <MuiThemeProvider>
      <FlashProvider>
        <Flash />
        <ShowFlash />
      </FlashProvider>
    </MuiThemeProvider>
  ))
