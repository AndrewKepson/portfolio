module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Andrew Kepson`,
    description: `Andrew Kepson's personal website for portfolio pieces and blog posts.`,
    author: `Andrew Kepson`,
    siteUrl: `https://andrewkepson.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-198099983-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
        enableWebVitalsTracking: true,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/sitemap',
        excludes: [
          `/writing/`,
          `/writing/a-title-compelling-enough`,
          `/writing/how-nike-is-using-blockchain-nike-cryptokicks`,
          `/writing/sample1`,
          `/writing/van-in-snowmass`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://andrewkepson.com`,
        policy: [
          { userAgent: '*', allow: '/', disallow: ['/writing', '/static'] },
        ],
      },
    },
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
        fonts: [`Work Sans`, `Poppins`, `Roboto`],
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
              maxWidth: 800,
              withWebp: true,
              linkImagesToOriginal: true,
              quality: 75,
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
      resolve: `@raae/gatsby-plugin-let-it-snow`,
      options: {
        colors: ['#B0D0EA', '#6E94CA', '#336591'],
        intensity: 'blizzard',
        season: {
          start: new Date('December 1, 2021 00:00:10'),
          end: new Date('December 31, 2021 23:59:50'),
        },
      },
    },
  ],
}
