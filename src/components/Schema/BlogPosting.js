import React from 'react'

import { PersonData } from './Person'

export default function BlogPosting({
  title,
  category,
  content,
  excerpt,
  date,
  url,
  wordCount,
  about,
  genre,
  altHeadline,
  audience,
  keywords,
  entity,
  topic,
  topicBook,
}) {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'BlogPosting',
        author: PersonData,
        name: title,
        headline: title,
        articleBody: content,
        text: content,
        articleSection: category,
        datePublished: date,
        dateModified: date,
        url: url,
        identifier: url,
        about: about,
        wordCount: '',
        genre: genre,
        backstory: '',
        alternativeHeadline: altHeadline,
        audience: {
          '@type': 'Audience',
          name: audience,
        },
        citation: [],
        creator: PersonData,
        copyrightHolder: '',
        copyrightYear: '',
        inLanguage: {
          '@type': 'Language',
          name: 'English',
          alternateName: 'en',
        },
        isAccessibleForFree: true,
        mainEntity: entity,
        keywords: keywords,
        mentions: {
          '@type': 'Thing',
          name: topic,
          subjectOf: {
            '@type': 'Book',
            name: topicBook,
          },
        },
        publication: '',
        description: '',
      })}
    </script>
  )
}
