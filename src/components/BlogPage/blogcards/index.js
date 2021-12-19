import React from 'react'
import { useWordPressPosts } from '../../../hooks/useWordPressPosts'

import BlogCard from './Blogcard'

const BlogCards = () => {
  const data = useWordPressPosts()

  const latestPosts = [...data.allWpPost.edges.map(post => post.node)]

  console.log(latestPosts)

  return (
    <div className="container flex flex-wrap -mx-4 justify-center">
      {latestPosts.map(post => (
        <BlogCard
          key={post.id}
          slug={post.uri}
          featuredImage={post.featuredImage}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  )
}

export default BlogCards
