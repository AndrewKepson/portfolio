import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

export const PersonData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrew Kepson',
  // image: `${siteUrl}/${personImageData.file.relativePath}`,
  email: 'mailto:jane-doe@xyz.edu',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Seattle',
    addressRegion: 'WA',
    postalCode: '98052',
    streetAddress: '20341 Whitworth Institute 405 N. Whitworth',
  },
  colleague: [
    'http://www.xyz.edu/students/alicejones.html',
    'http://www.xyz.edu/students/bobsmith.html',
  ],
  jobTitle: 'Web Developer',
  telephone: '(425) 123-4567',
  url: siteUrl,
  hasOccupation: [
    {
      '@type': 'Role',
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Search Engine Optimization Analyst',
        occupationalCategory: '23-2099.00',
      },
      startDate: '2020',
      endDate: '2022',
    },
    {
      '@type': 'Occupation',
      name: 'Content Writer/Copywriter',
      educationRequirements: 'Bachelor of Arts in English Literature',
      startDate: '2019',
    },
  ],
  knowsAbout: [
    {
      '@context': 'https://schema.org/',
      '@type': 'Thing',
      name: 'Web Development',
      subjectOf: {
        '@type': 'Book',
        name: 'The Complete History of Schema.org',
      },
      sameAs: 'https://en.wikipedia.org/wiki/Web_development',
    },
    {
      '@context': 'https://schema.org/',
      '@type': 'Thing',
      name: 'Search Engine Optimization',
      subjectOf: {
        '@type': 'Book',
        name: 'The Complete History of Schema.org',
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
      subjectOf: {
        '@type': 'Book',
        name: 'The Complete History of Schema.org',
      },
      sameAs: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
    },
    {
      '@context': 'https://schema.org/',
      '@type': 'Thing',
      name: 'Jamstack',
      subjectOf: {
        '@type': 'Book',
        name: 'The Complete History of Schema.org',
      },
      sameAs: 'https://en.wikipedia.org/wiki/Jamstack',
    },
  ],
}

export default function PersonSchema() {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useSiteMetadata()

  // const personImageData = useStaticQuery(graphql`
  //   {
  //     file(name: { eq: "802A3320" }) {
  //       relativePath
  //     }
  //   }
  // `)

  // console.log(personImageData)

  return (
    <script type="application/ld+json">{JSON.stringify(PersonData)}</script>
  )
}
