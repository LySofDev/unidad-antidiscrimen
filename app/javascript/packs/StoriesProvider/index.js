import React from 'react'
import ThemeProvider from '../ThemeProvider'
import { FlashProvider, Flash } from '../Flash'

export default ({ children }) => (
  <ThemeProvider>
    <FlashProvider>
      <div className="content">
        { children }
        <Flash />
      </div>
    </FlashProvider>
  </ThemeProvider>
)
