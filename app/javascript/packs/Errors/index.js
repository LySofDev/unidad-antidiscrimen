import React from 'react'
import Paper from 'material-ui/Paper'
import { withState } from 'recompose'

const styles = {
  padding: "1rem",
  background: "#FF596D",
  color: "white"
}

export const withErrors = withState('errors', 'setErrors', [])

export default ({ errors }) => {
  if (!errors || errors.length === 0) return null
  return (<Paper style={styles}>{errors[0]}</Paper>)
}
