import React from 'react'
import { Link } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'

const BlogPost = ({ post, category }) => (
  <Fade bottom>
    <div className="mb-6 w-full">
      <div className="bg-white flex flex-wrap h-full overflow-hidden rounded-md shadow-lg">
        <div className="w-full md:w-5/12 lg:w-full xl:w-5/12">
          <div className="h-full relative">
            {' '}
            <Link
              to={post.uri}
              className="block h-full opacity-75 hover:opacity-100"
            >
              {post.featuredImage ? (
                <GatsbyImage
                  image={getImage(post.featuredImage.node.localFile)}
                  alt={post.featuredImage?.node.altText}
                  className="h-full object-cover w-full"
                />
              ) : (
                <StaticImage
                  src="../../images/stock/writing-notepad.jpg"
                  className="h-full object-cover w-full"
                  alt="Writing before blogs."
                  quality={90}
                />
              )}
            </Link>
          </div>
        </div>
        <div className="px-8 py-6 w-full md:w-7/12 lg:w-full xl:w-7/12">
          <div className="mb-3">
            {' '}
            <span
              className={` bg-opacity-75 font-medium inline-block py-1 rounded-sm text-xs uppercase`}
            >
              {category}
            </span>
          </div>
          <h3 className="font-heading font-semibold leading-tight mb-3 hover:text-purple-400">
            <Link to={post.uri}>{post.title}</Link>
          </h3>
          <p
            className="font-body mb-3"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
          <Link
            to={post.uri}
            className="font-bold hover:text-purple-400 text-purple-600 text-sm"
          >
            Read more
          </Link>
          <div className="border-t flex items-center justify-end mt-auto py-3 text-gray-600 text-xs w-full">
            <p>{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  </Fade>
)

export default BlogPost
