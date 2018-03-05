import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ApolloClientProvider, { getApolloClient } from './'

const TestComponent = getApolloClient(({ apollo }) => apollo ? (<div>Success</div>) : (<div>Failure</div>))

Enzyme.configure({ adapter: new Adapter() })

test("It mounts successfully", () => {
  const wrapper = Enzyme.mount(<ApolloClientProvider />)
  expect(wrapper).toBeTruthy()
})

test("It provides the apollo client", () => {
  const wrapper = Enzyme.mount(
    <ApolloClientProvider>
      <TestComponent />
    </ApolloClientProvider>
  )
  expect(wrapper.contains(<div>Success</div>)).toBe(true)
})
