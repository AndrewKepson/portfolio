import React from 'react'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

const ArticleSchema = ({
  title,
  description,
  content,
  category,
  author,
  date,
  dateModified,
  keywords,
  slug,
}) => {
  const {
    site: {
      siteMetadata: { title: company, siteUrl },
    },
  } = useSiteMetadata()

  return (
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Article',
        name: title,
        description: description,

        articleBody: content,
        wordCount: content.lenth,
        about: {
          '@type': 'Thing',
          name: category,
        },
        dateCreated: date,
        dateModified: dateModified,
        datePublished: date,
        discussionUrl: `${siteUrl}/blog/${slug}`,
        keywords: keywords,
        author: {
          '@type': 'Organization',
          name: company,
          member: {
            '@type': 'Person',
            name: author,
          },
        },
        headline: title,
        isFamilyFriendly: true,
        text: content,
        url: `${siteUrl}${uri}`,
      })}
    </script>
  )
}

export default ArticleSchema
