import React from 'react'

import LoginForm from './Form'

import AuthenticateUser from './AuthenticateUser'

export default props => (
  <AuthenticateUser>
    { ({ form, errors, updateField, submitForm }) => (
      <LoginForm
        form={form}
        errors={errors}
        onUpdate={updateField}
        onSubmit={submitForm}
      />
    )}
  </AuthenticateUser>
)
