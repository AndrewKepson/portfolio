import React, { useState } from 'react'
import { useWordPressPosts } from '../../hooks/useWordPressPosts'

import { BlogPost } from './BlogPost'
import { Sidebar } from './Sidebar'
import { NothingHere } from './NothingHere'

export const BlogPageContent = () => {
  const allPosts = useWordPressPosts()

  const [displayedPosts, setDisplayedPosts] = useState({
    allPosts,
    displayedPosts: allPosts,
  })

  const filterBySearch = e => {
    const input = e.target.value
    const posts = [...allPosts] || []

    if (input === '') {
      setDisplayedPosts(prev => ({ ...prev, displayedPosts: allPosts }))
    } else {
      const filteredList = posts.filter(
        post =>
          post.title.toLowerCase().startsWith(input.toLowerCase()) ||
          post.title.toLowerCase().includes(input.toLowerCase()) ||
          post.categories.nodes[0].name
            .toLowerCase()
            .startsWith(input.toLowerCase())
      )

      setDisplayedPosts(prev => ({
        ...prev,
        displayedPosts: [...filteredList.slice(0, 10)],
      }))
    }
  }

  const filterByCategory = e => {
    const selected = e.target.value

    if (selected === 'all') {
      setDisplayedPosts(prev => ({
        ...prev,
        displayedPosts: [...allPosts],
      }))
    } else {
      const categoryPosts = allPosts.filter(
        post => post.categories.nodes[0].name === selected
      )

      setDisplayedPosts(prev => ({
        ...prev,
        displayedPosts: [...categoryPosts],
      }))
    }
  }

  const onClear = e => {
    e.preventDefault()

    setDisplayedPosts(prev => ({
      ...prev,
      displayedPosts: [...allPosts],
    }))
  }

  return (
    <div className="-mx-4 flex flex-wrap justify-center">
      <Sidebar
        posts={allPosts}
        searchedName={null}
        filterBySearch={filterBySearch}
        filterByCategory={filterByCategory}
        onClear={onClear}
      />
      <div className="w-full p-4 lg:w-7/12 xl:w-8/12">
        <div>
          {displayedPosts.displayedPosts.length > 0 ? (
            displayedPosts.displayedPosts.map(post => {
              const category = post.categories.nodes[0].name

              return <BlogPost key={post.id} post={post} category={category} />
            })
          ) : (
            <NothingHere />
          )}
          <div className="text-center font-roboto font-semibold">
            Powered by Headless WordPress
          </div>
        </div>
      </div>
    </div>
  )
}
