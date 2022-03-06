import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Seo = ({ title, description, meta = [], canonical, ogImage = '', ogImageAltText = '' }) => {
  const { site } = useSiteMetadata()

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
					name: 'og:image',
					content: ogImage,
				},
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
					name: 'twitter:image',
					content: `${site.siteMetadata.siteUrl}${ogImage}`,
				},
        {
					name: 'twitter:image:alt',
					content: ogImageAltText,
				}
      ].concat(meta)}
    >
      <title>{title}</title>
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  ogImage: PropTypes.string
}

export default Seo
