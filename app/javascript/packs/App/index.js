import React from 'react'
import ApolloClientProvider from '../ApolloClientProvider'
import ThemeProvider from '../ThemeProvider'
import RouterProvider from '../RouterProvider'
import { FlashProvider, Flash } from '../Flash'
import AppBar from '../AppBar'

export default ({ children }) => (
  <ApolloClientProvider>
    <RouterProvider>
      <ThemeProvider>
        <FlashProvider>
          <div className="content">
            <AppBar />
            { children }
            <Flash />
          </div>
        </FlashProvider>
      </ThemeProvider>
    </RouterProvider>
  </ApolloClientProvider>
)
