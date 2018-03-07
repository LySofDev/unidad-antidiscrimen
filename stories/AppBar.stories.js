import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import StoriesProvider from '../app/javascript/packs/StoriesProvider'

import AppBar from '../app/javascript/packs/AppBar'

storiesOf('AppBar', module)
  .add('default', () => (
    <StoriesProvider>
      <AppBar />
    </StoriesProvider>
  ))
