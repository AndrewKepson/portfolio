import React from 'react'

import MainImages from './mainImages'
import ColoradoPhotos from './coloradoPhotos'
import UtahPhotos from './utahPhotos'
import CityPhotos from './cityPhotos'

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-2 w-full m-8">
      <MainImages />
      <ColoradoPhotos />
      <UtahPhotos />
      <CityPhotos />
    </div>
  )
}

export default Gallery
