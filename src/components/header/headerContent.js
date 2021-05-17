import React, { useState } from 'react'

import Brand from './brand'
import Nav from './nav'
import Burger from './burger'

export default function HeaderContent() {
  const [burger, setBurger] = useState(false)

  const handleBurger = () => {
    burger ? setBurger(false) : setBurger(true)
  }

  return (
    <section className="container mx-auto px-4 md:px-0">
      <Brand />
      <Burger handleBurger={handleBurger} />
      <hr className="border-gray-400 border-opacity-50 lg:mx-auto w-full" />
      <Nav burger={burger} setBurger={setBurger} />
    </section>
  )
}
