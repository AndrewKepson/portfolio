import React, { useEffect } from 'react'
import { BlogContext } from '../../contexts/BlogContext'

import { BlogPageContent } from '../components'

export const BlogLayout = ({ posts = [] }) => {
  return (
    <BlogContext.Consumer>
      {category => (
        <BlogPageContent
          posts={posts}
          category={category.category}
          updateCategory={category.updateCategory}
        />
      )}
    </BlogContext.Consumer>
  )
}
