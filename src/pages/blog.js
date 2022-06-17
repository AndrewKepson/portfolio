import React from 'react'
import { graphql } from 'gatsby'
import { useWordPressPosts } from '../hooks/useWordPressPosts'

import {
  Layout,
  BlogLayout,
  Seo,
  BlogPageContent,
} from '../components/components'

const BlogPage = ({
  data: {
    wpPage: {
      seo,
      schemaMarkup: { schemaMarkup },
    },
  },
}) => {
  const chronologicalPosts = useWordPressPosts()

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.metaDesc}
        canonical={seo.canonical}
      />
      <BlogLayout posts={chronologicalPosts} />
      <div dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPageQuery {
    wpPage(title: { eq: "Blog" }) {
      id
      seo {
        title
        metaDesc
        canonical
      }
      schemaMarkup {
        schemaMarkup
      }
    }
  }
`
