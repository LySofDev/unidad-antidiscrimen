import React from 'react'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import logo from './logo.gif'

export default props => (
  <AppBar
    title={ <span className="app-title">Unidad Antidiscrimen</span> }
    iconElementLeft={ <Avatar size={50} src={logo} className="app-logo" /> }
    onTitleClick={ event => window.location.href = "http://localhost:3000" }
    onLeftIconButtonClick={ event => window.location.href = "http://localhost:3000" }
  />
)
