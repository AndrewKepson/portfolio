import React from 'react'

import MainImages from './MainImages'
import ColoradoPhotos from './ColoradoPhotos'
import UtahPhotos from './UtahPhotos'
import NorthCarolinaPhotos from './NorthCarolinaPhotos'
import CityPhotos from './CityPhotos'

const Gallery = () => (
  <div className="grid grid-cols-1 grid-rows-1 gap-2 w-full md:m-4 lg:m-8">
    <MainImages />
    <ColoradoPhotos />
    <UtahPhotos />
    <NorthCarolinaPhotos />
    <CityPhotos />
  </div>
)

export default Gallery
