module.exports = {
  siteMetadata: {
    title: `Andrew Kepson`,
    description: `Andrew Kepson's personal website for portfolio pieces and blog posts.`,
    author: `Andrew Kepson`,
    siteUrl: `https://andrewkepson.com`,
  },
  trailingSlash: 'always',
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
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://headless.andrewkepson.com/graphql`,
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          allow404Images: true,
          allow401Images: true,
        },
        schema: {
          typePrefix: `Wp`,
        },
        html: {
          useGatsbyImage: true,
          generateWebpImages: true,
          imageMaxWidth: 800,
          imageQuality: 90,
          createStaticFiles: true,
        },
        type: {
          Post: {
            limit: process.env.NODE_ENV === `development` ? 50 : 5000,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
            },
            {
              family: `Work Sans`,
            },
          ],
        },
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
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `@raae/gatsby-plugin-let-it-snow`,
      options: {
        colors: ['#B0D0EA', '#6E94CA', '#336591'],
        intensity: 'blizzard',
        duration: 7,
        season: {
          start: new Date('December 1, 2021 00:00:10'),
          end: new Date('December 31, 2021 23:59:50'),
        },
      },
    },
  ],
}
