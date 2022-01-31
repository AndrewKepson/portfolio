import React from 'react'

export const PersonData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrew Kepson',
  url: 'https://andrewkepson.com/',
  jobTitle: 'Search Engine Optimization Analyst',
  worksFor: 'SocialSEO',
  alumniOf: 'University of Colorado Colorado Springs',
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Search Engine Optimization Analyst',
  },
  knowsAbout: [
    {
      '@context': 'https://schema.org/',
      '@type': 'Thing',
      name: 'Web Development',
      sameAs: 'https://en.wikipedia.org/wiki/Web_development',
    },
    {
      '@context': 'https://schema.org/',
      '@type': 'Thing',
      name: 'Search Engine Optimization',
      subjectOf: {
        '@type': 'Book',
        name: 'The Art of SEO',
      },
      sameAs: 'https://en.wikipedia.org/wiki/Search_engine_optimization',
    },
    {
      '@context': 'https://schema.org/',
      '@type': 'Thing',
      name: 'Web Design',
      subjectOf: {
        '@type': 'Book',
        name: 'The Principles of Beautiful Web Design',
      },
      sameAs: 'https://en.wikipedia.org/wiki/Web_design',
    },
    {
      '@context': 'https://schema.org/',
      '@type': 'Thing',
      name: 'JavaScript',
      subjectOf: {
        '@type': 'Book',
        name: 'Eloquent JavaScript',
      },
      sameAs: 'https://en.wikipedia.org/wiki/JavaScript',
    },
    {
      '@context': 'https://schema.org/',
      '@type': 'Thing',
      name: 'ReactJS',
      sameAs: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
    },
    {
      '@context': 'https://schema.org/',
      '@type': 'Thing',
      name: 'Jamstack',
      subjectOf: {
        '@type': 'Book',
        name: 'Practical JAMstack',
      },
      sameAs: 'https://en.wikipedia.org/wiki/Jamstack',
    },
  ],
}

export function PersonSchema() {
  return (
    <script type="application/ld+json">{JSON.stringify(PersonData)}</script>
  )
}
