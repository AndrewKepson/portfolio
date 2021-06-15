module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Andrew Kepson',
    description: `Andrew Kepson's personal website for portfolio pieces and blog posts.`,
    author: 'Andrew Kepson',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Work Sans`, `Poppins`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              withWebp: true,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-instagram-embed`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-MCF0080YYY'],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
}
