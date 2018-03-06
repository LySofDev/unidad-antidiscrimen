import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Errors from '../app/javascript/packs/Errors'
import StoriesProvider from '../app/javascript/packs/StoriesProvider'

storiesOf('Errors', module)
  .add('with a single error', () => (
    <StoriesProvider>
      <Errors errors={["A single error"]} />
    </StoriesProvider>
  ))
  .add('with multiple errors', () => (
    <StoriesProvider>
      <Errors errors={["A first error", "A second error"]} />
    </StoriesProvider>
  ))
