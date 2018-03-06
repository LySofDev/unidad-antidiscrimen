import React from 'react'
import ApolloClientProvider from '../ApolloClientProvider'
import ThemeProvider from '../ThemeProvider'
import { FlashProvider, Flash } from '../Flash'

export default ({ children }) => (
  <ApolloClientProvider>
    <ThemeProvider>
      <FlashProvider>
        <div className="content">
          { children }
          <Flash />
        </div>
      </FlashProvider>
    </ThemeProvider>
  </ApolloClientProvider>
)
