const path = require('path')
const { slash } = require('gatsby-core-utils')

module.exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const getBlogs = await graphql(`
    {
      allWpPost {
        edges {
          node {
            id
            uri
            title
            slug
          }
        }
      }
    }
  `)

  if (getBlogs.errors) throw new Error(getBlogs.errors)

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
