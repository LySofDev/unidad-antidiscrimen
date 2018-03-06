import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from 'material-ui/Snackbar'
import { compose, withState, withContext, getContext } from 'recompose'

const provideFlashContext = compose(
  withState('flashMessage', 'updateFlash', ""),
  withContext(
    {
      flashMessage: PropTypes.string.isRequired,
      updateFlash: PropTypes.func.isRequired
    },
    ({ flashMessage, updateFlash }) => ({ flashMessage, updateFlash })
  )
)

export const withUpdateFlash = getContext({
  updateFlash: PropTypes.func.isRequired
})

export const withFlashMessage = getContext({
  flashMessage: PropTypes.string.isRequired
})

export const withFlashContext = getContext({
  flashMessage: PropTypes.string.isRequired,
  updateFlash: PropTypes.func.isRequired
})

export const FlashProvider = provideFlashContext(({ children }) => <div>{children}</div>)

class FlashMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.flashMessage.length > 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.flashMessage.length > 0 && this.props.flashMessage !== nextProps.flashMessage) {
      this.setState({ open: true })
    } else {
      this.setState({ open: false })
    }
  }

  dissmiss(event) {
    this.props.updateFlash("")
  }

  render() {
    return (
      <Snackbar
        open={this.state.open}
        message={this.props.flashMessage}
        onClick={this.dissmiss.bind(this)}
      />
    )
  }
}

export const Flash = withFlashContext(FlashMessage)
