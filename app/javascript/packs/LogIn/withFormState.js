import { withStateHandlers } from 'recompose'

export default function(defaultState, callback) {
  return withStateHandlers(
    props => ({
      form: defaultState || {}
    }),
    {
      updateField: (state, props) => (field, value) => ({
        form: Object.assign({}, state.form, {
          [field]: value
        })
      }),
      submitForm: (state, props) => event => {
        event.preventDefault()
        callback(state.form, props)
        return state
      }
    }
  )
}
