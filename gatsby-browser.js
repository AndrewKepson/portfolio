import React from 'react'
import './src/styles/global.css'

import { BlogContextProvider } from './src/contexts/BlogContext'

export const wrapRootElement = ({ element }) => (
  <BlogContextProvider>{element}</BlogContextProvider>
)
