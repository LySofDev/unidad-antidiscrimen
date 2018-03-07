import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import StoriesProvider from '../app/javascript/packs/StoriesProvider'

import { FormField, FormContainer, FormState } from '../app/javascript/packs/Form'

storiesOf("FormField", module)
  .add("default", () => (
    <StoriesProvider>
      <FormField
        title="Text Field"
        value=""
      />
    </StoriesProvider>
  ))

storiesOf("FormContainer", module)
  .add("default", () => (
    <StoriesProvider>
      <FormContainer
        primaryLabel="Sign Up"
        secondaryLabel="Already a member?"
      >
        <FormField
          title="Text Field"
          value=""
        />
      </FormContainer>
    </StoriesProvider>
  ))

storiesOf("FormState", module)
  .add("default", () => (
    <StoriesProvider>
      <FormState
        component={({ form, updateField }) => (
          <FormContainer
            primaryLabel="Sign In"
            secondaryLabel="Not registered yet?"
          >
            <FormField
              title="Email"
              value={form.email}
              onChange={value => updateField('email', value)}
            />
            <br />
            <FormField
              title="Password"
              value={form.password}
              onChange={value => updateField('password', value)}
            />
          </FormContainer>
        )}
      />
    </StoriesProvider>
  ))
