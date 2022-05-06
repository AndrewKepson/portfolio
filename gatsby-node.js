const path = require('path')
const { slash } = require('gatsby-core-utils')

module.exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
}) => {
  createRedirect({
    fromPath: '/blog/create-headless-wordpress-source-gatsby-wordpress-api/',
    toPath:
      '/blog/headless-wordpress/create-headless-wordpress-source-gatsby-wordpress-api/',
    isPermanent: true,
  })
  createRedirect({
    fromPath: '/blog/how-and-why-nike-is-using-blockchain/',
    toPath: '/blog/blockchain/how-and-why-nike-is-using-blockchain/',
    isPermanent: true,
  })

  const getBlogs = await graphql(`
    {
      allWpPost {
        edges {
          node {
            id
            uri
          }
        }
      }
    }
  `)

  if (getBlogs.errors) {
    reporter.panicOnBuild(
      'Error while running GraphQL query to fetch WordPress posts.'
    )
    return
  }

  const wordPressPosts = getBlogs.data.allWpPost.edges
  const blogTemplate = path.resolve(`./src/templates/post.js`)

  wordPressPosts.forEach(post =>
    createPage({
      path: post.node.uri,
      component: slash(blogTemplate),
      context: {
        id: post.node.id,
      },
    })
  )
}
