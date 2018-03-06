import React from 'react'

export default class FormState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: props.initialState || {},
    }
    this.updateField = this.updateField.bind(this)
  }

  updateField(field, value) {
    this.setState({
      form: Object.assign({}, this.state.form, {
        [field]: value
      })
    })
  }

  render() {
    const component = this.props.component
    if (component) {
      return component({
        form: this.state.form,
        updateField: this.updateField
      })
    }
    return null
  }
}
