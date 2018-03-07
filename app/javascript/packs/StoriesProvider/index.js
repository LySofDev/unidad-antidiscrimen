import React from 'react'
import ThemeProvider from '../ThemeProvider'
import { FlashProvider, Flash } from '../Flash'
import RouterProvider from '../RouterProvider'

export default ({ children }) => (
  <RouterProvider>
    <ThemeProvider>
      <FlashProvider>
        <div className="content">
          { children }
          <Flash />
        </div>
      </FlashProvider>
    </ThemeProvider>
  </RouterProvider>
)
