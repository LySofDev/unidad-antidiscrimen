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
    this.dismiss = this.dismiss.bind(this)
    this.extractMessage = this.extractMessage.bind(this)
  }

  componentWillMount() {
    const flash = {
      alert: this.extractMessage('alert'),
      notice: this.extractMessage('notice')
    }
    if (flash.alert.length > 0) this.props.updateFlash(flash.alert)
    else if (flash.notice.length > 0) this.props.updateFlash(flash.notice)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.flashMessage.length > 0 && this.props.flashMessage !== nextProps.flashMessage) {
      this.setState({ open: true })
    } else {
      this.setState({ open: false })
    }
  }

  extractMessage(key) {
    const element = document.getElementById(key)
    return element ? element.value : ''
  }

  dismiss(event) {
    this.props.updateFlash("")
  }

  render() {
    return (
      <Snackbar
        className="flash-message"
        open={this.state.open}
        message={this.props.flashMessage}
        onClick={this.dismiss}
      />
    )
  }
}

export const Flash = withFlashContext(FlashMessage)
