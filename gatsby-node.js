const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const getBlogs = await graphql(`
    query {
      allFile(filter: { dir: { regex: "/posts/" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                date
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)

  const getSamples = await graphql(`
    query {
      allFile(filter: { relativeDirectory: { eq: "samples" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                date
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)

  getBlogs.data.allFile.edges.forEach(edge => {
    createPage({
      component: path.resolve(`./src/templates/blog.js`),
      path: `/blog/${edge.node.childMarkdownRemark.fields.slug}`,
      context: {
        slug: edge.node.childMarkdownRemark.fields.slug,
      },
    })
  })

  getSamples.data.allFile.edges.forEach(edge => {
    createPage({
      component: path.resolve(`./src/templates/sample.js`),
      path: `/writing/${edge.node.childMarkdownRemark.fields.slug}`,
      context: {
        slug: edge.node.childMarkdownRemark.fields.slug,
      },
    })
  })
}
