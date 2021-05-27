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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: './static/favicon.ico',
      },
    },
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
              linkImagesToOriginal: false,
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
  ],
}
