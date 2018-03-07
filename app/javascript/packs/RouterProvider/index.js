import React from 'react'
import { withContext, withHandlers, compose, getContext } from 'recompose'
import PropTypes from 'prop-types'

const routerProps = { redirectTo: PropTypes.func.isRequired }

const enhance = compose(

  withHandlers({
    redirectTo: props => path => {
      window.location.href = "http://localhost:3000" + path
    }
  }),

  withContext(
    routerProps,
    ({ redirectTo }) => ({ redirectTo })
  )

)

export const withRouter = getContext(routerProps)

export default enhance(({ children }) => <div>{children}</div>)
