import React from 'react'
import { Link } from 'gatsby'

import DevSVG from './DevSvg'
import WritingSVG from './WritingSvg'
import ArtSVG from './ArtSvg'

const PortfolioCard = ({ portfolio, description, href }) => {
  function chooseSvg(portfolio) {
    if (portfolio === 'Development') return <DevSVG />
    if (portfolio === 'Blog') return <WritingSVG />
    if (portfolio === 'Photography & Digital Art') return <ArtSVG />
  }

  return (
    <div className='w-full p-4 lg:w-1/3'>
      <div className='flex flex-col justify-between place-content-around bg-gray-100 h-full px-6 py-16 rounded-lg shadow-lg'>
        {chooseSvg(portfolio)}
        <h5 className='font-bold mb-2 text-gray-900 text-xl'>{portfolio}</h5>
        <p className='mb-4 text-lg'>{description}</p>
        <Link to={href} className='text-purple-400 hover:text-purple-600'>
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default PortfolioCard