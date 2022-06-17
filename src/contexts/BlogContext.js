import React, { createContext, useState } from 'react'

const initialState = {
  uri: `/blog/`,
  name: `all`,
}

export const BlogContext = createContext(initialState)

export const BlogContextProvider = ({ children }) => {
  const [category, setCategory] = useState('all')

  const updateCategory = updatedCategory => setCategory(updatedCategory)

  return (
    <BlogContext.Provider value={{ category, updateCategory }}>
      {children}
    </BlogContext.Provider>
  )
}
