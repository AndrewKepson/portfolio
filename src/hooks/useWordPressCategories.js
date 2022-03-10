import { useStaticQuery, graphql } from 'gatsby'

export const useWordPressCategories = () => {
  const { allWpCategory } = useStaticQuery(graphql`
    query WordPressCategoriesQuery {
      allWpCategory {
        edges {
          node {
            id
            uri
            name
            posts {
              nodes {
                id
                title
                uri
                featuredImage {
                  node {
                    altText
                    localFile {
                      absolutePath
                    }
                  }
                }
                excerpt
                author {
                  node {
                    name
                  }
                }
                categories {
                  nodes {
                    name
                  }
                }
                tags {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return [...allWpCategory.edges.map(edge => edge.node)]
}
