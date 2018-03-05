import React from 'react'
import Enzyme from '../Enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Form from './Form'

test("It renders a form", () => {
  const wrapper = Enzyme.mount(
    <MuiThemeProvider>
      <Form />
    </MuiThemeProvider>
  )
  expect(wrapper.find(TextField).length).toBe(2)
  expect(wrapper.find(RaisedButton).length).toBe(1)
})
