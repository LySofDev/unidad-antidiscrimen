import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Flash, FlashProvider, withUpdateFlash } from '../app/javascript/packs/Flash'
import StoriesProvider from '../app/javascript/packs/StoriesProvider'
import RaisedButton from 'material-ui/RaisedButton'

const ShowFlash = withUpdateFlash(({ updateFlash }) => (
  <RaisedButton label="Show Flash" onClick={event => updateFlash("Flash activated!")} />
))

storiesOf('Flash', module)
  .add('default', () => (
    <StoriesProvider>
      <FlashProvider>
        <Flash />
      </FlashProvider>
    </StoriesProvider>
  ))
  .add('with a new flash message', () => (
    <StoriesProvider>
      <FlashProvider>
        <Flash />
        <ShowFlash />
      </FlashProvider>
    </StoriesProvider>
  ))
