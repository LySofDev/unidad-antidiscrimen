import React from 'react'
import Paper from 'material-ui/Paper'
import { RED } from '../../constants'

const styles = {
  padding: "1rem",
  background: RED,
  color: "white"
}

export default ({ errors }) => {
  if (!errors || errors.length === 0) return null
  return (<Paper style={styles}>{errors[0]}</Paper>)
}
