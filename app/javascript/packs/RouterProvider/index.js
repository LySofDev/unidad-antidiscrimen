import React from 'react'
import { withContext, withHandlers, compose, getContext } from 'recompose'
import PropTypes from 'prop-types'

const routerProps = { redirectTo: PropTypes.func.isRequired }

const enhance = compose(

  withHandlers({
    redirectTo: props => (path, opts = {}) => {
      let url = "http://localhost:3000" + path + "/?"
      if (opts.alert) url += "alt=" + opts.alert + "&"
      if (opts.notice) url += "ntc=" + opts.notice + "&"
      window.location.href = url
    }
  }),

  withContext(
    routerProps,
    ({ redirectTo }) => ({ redirectTo })
  )

)

export const withRouter = getContext(routerProps)

export default enhance(({ children }) => <div>{children}</div>)
