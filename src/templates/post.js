import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import { Layout, Seo, ShareButtons, Tag } from '../components/components'

const Post = ({
  data: {
    wpPost: {
      featuredImage: {
        altText,
        node: {
          localFile: {
            childImageSharp: { featuredImg, ogImg, twitterImg },
          },
        },
      },
      seo,
      uri,
      title,
      excerpt,
      date,
      content,
      categories,
      tags: postTags,
    },
  },
}) => {
  const category = categories.nodes[0].name
  const tags = [...postTags.nodes.map(tag => tag.name)]

  const { siteUrl } = useSiteMetadata()

  const getHeadings = markup => {
    const article = document.createElement('div')

    article.innerHTML = markup

    const headings = [
      { title, id: 1 },
      ...[...article.querySelectorAll('h2, h3')].map((heading, i) => ({
        title: heading.innerText,
        id: i + 2,
      })),
    ]

    return headings
  }

  const headings = getHeadings(content)

  const chooseCategoryColor = category => {
    let color

    if (category === 'Headless WordPress') {
      color = 'purple'
    } else if (category === 'Blockchain') {
      color = 'emerald'
    } else if (category === 'Digital Marketing') {
      color = 'blue'
    } else if (category === 'SEO') {
      color = 'orange'
    } else {
      color = 'red'
    }

    return color
  }

  const chooseTagColor = tag => {
    let color

    switch (tag) {
      case 'Gatsby':
        color = 'purple'
        break
      case 'Headless WordPress':
        color = 'blue'
        break
      case 'Headless CMS':
        color = 'indigo'
        break
      case 'SEO':
        color = 'orange'
        break
      default:
        color = 'purple'
    }

    return color
  }

  const categoryColor = chooseCategoryColor(category)

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.metaDesc}
        canonical={`${siteUrl}${uri}`}
        ogType="article"
        ogImg={ogImg.src}
        ogImgAltText={altText}
        twitterImg={twitterImg.src}
      />
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap lg:items-center">
            <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2 2xl:w-5/12">
              <div className="mx-auto max-w-max overflow-hidden rounded-lg md:ml-0">
                <GatsbyImage
                  image={featuredImg}
                  alt={altText}
                  loading="eager"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div
                className={`mb-6 inline-block rounded-full bg-${categoryColor}-100 py-1 px-3 text-xs font-medium uppercase leading-5 text-purple-600 shadow-sm`}
              >
                {category}
              </div>
              <div className="flex items-center">
                <p className="inline-block font-medium text-purple-600">
                  Andrew Kepson
                </p>
                <span className="mx-1 text-violet-500">•</span>
                <p className="inline-block font-medium text-purple-600">
                  {date}
                </p>
              </div>
              <h1 className="mb-4 font-roboto text-3xl font-bold leading-tight tracking-tighter text-gray-900 md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <div className="-mx-2 flex items-center">
                <div className="w-auto px-2">
                  <img src="flex-ui-assets/images/blog/avatar.png" alt="" />
                </div>
                <div className="hidden w-full px-2 lg:block">
                  <p className="text-coolGray-500 text-base md:text-lg">
                    {date}
                  </p>
                  <span className="text-coolGray-800 text-base font-bold md:text-lg">
                    Tags:
                  </span>

                  <div className="min-h-full w-full">
                    <ul className="flex flex-row flex-wrap gap-1">
                      {tags.map((tag, i) => (
                        <li key={tag}>
                          <Tag tag={tag} color={chooseTagColor(tag)} />
                          {/* {i === tags.length - 1 ? '' : ','} */}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <aside className="w-full px-4 md:w-5/12 lg:mb-8 lg:w-4/12 xl:w-3/12">
              <ShareButtons
                url={`${siteUrl}${uri}`}
                title={title}
                excerpt={excerpt}
                hashtags={tags}
              />
              <span className="text-coolGray-600 border-coolGray-200 border-b text-center font-roboto text-xl font-semibold">
                Table of Contents
              </span>
              <ul className="border-coolGray-100 text-coolGray-300 hover:text-coolGray-500 border-b lg:mb-8 lg:pb-6">
                {headings.map(heading => (
                  <li key={heading.id} className="mb-2">
                    <span className="  inline-block py-2 font-roboto font-semibold">
                      {heading.title}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>

            <div class="w-full md:flex-1 lg:mt-6">
              <article className="prose mx-auto mb-16 max-w-full font-work-sans text-lg leading-relaxed text-gray-900 prose-headings:font-roboto prose-headings:font-semibold prose-h1:text-center prose-h1:text-5xl prose-h1:text-gray-800 prose-h2:text-4xl prose-h2:text-gray-700 prose-h3:text-3xl prose-h3:text-gray-600 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:text-purple-500 prose-blockquote:border-purple-300 prose-img:shadow-xl md:w-2/3 md:text-xl">
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <div className="text-right">{date}</div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      featuredImage {
        node {
          localFile {
            childImageSharp {
              featuredImg: gatsbyImageData(placeholder: BLURRED, quality: 90)
              ogImg: resize(
                cropFocus: ATTENTION
                height: 630
                width: 1200
                quality: 90
              ) {
                src
              }
              twitterImg: resize(
                cropFocus: ATTENTION
                height: 120
                width: 120
                quality: 90
              ) {
                src
              }
            }
          }
        }
      }
      seo {
        canonical
        title
        metaDesc
      }
      uri
      title
      excerpt
      date(formatString: "MMMM Do, YYYY")
      tags {
        nodes {
          name
        }
      }
      content
      categories {
        nodes {
          name
        }
      }
    }
  }
`
