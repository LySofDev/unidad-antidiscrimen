import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

test("It mounts", () => {
  const wrapper = Enzyme.mount(<App />)
  expect(wrapper).toBeTruthy()
})
