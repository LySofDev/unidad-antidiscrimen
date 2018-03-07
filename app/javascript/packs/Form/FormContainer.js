import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import Errors from '../Errors'

const styles = {
  container: {
    padding: "1rem",
    display: "inline-block"
  },
  primary: {
    marginRight: "0.25rem"
  },
  secondary: {
    marginLeft: "0.25rem"
  }
}

export default props => (
  <Paper style={styles.container}>
    <Errors errors={props.errors} />
    {props.children}
    <br />
    <RaisedButton
      label={props.primaryLabel}
      primary
      style={styles.primary}
      onClick={props.onPrimary}
    />
    <FlatButton
      label={props.secondaryLabel}
      secondary
      style={styles.secondary}
      onClick={props.onSecondary}
      />
  </Paper>
)
