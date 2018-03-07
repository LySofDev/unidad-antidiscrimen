import React from 'react'
import ApolloClientProvider from '../ApolloClientProvider'
import ThemeProvider from '../ThemeProvider'
import { FlashProvider, Flash } from '../Flash'
import AppBar from '../AppBar'

export default ({ children }) => (
  <ApolloClientProvider>
    <ThemeProvider>
      <FlashProvider>
        <div className="content">
          <AppBar />
          { children }
          <Flash />
        </div>
      </FlashProvider>
    </ThemeProvider>
  </ApolloClientProvider>
)
