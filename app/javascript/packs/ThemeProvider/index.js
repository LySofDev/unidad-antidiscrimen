import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const theme = getMuiTheme({

})

export default ({ children }) => (
  <MuiThemeProvider muiTheme={theme}>{children}</MuiThemeProvider>
)
