import React from 'react'

import { Header } from './Header'
import { Marketing } from './Marketing'
import { HeadlessWpReact } from './HeadlessWpReact'
import { HeadlessWPFAQs } from './HeadlessWPFAQs'

export const HeadlessWPPageContent = () => (
  <div>
    <Header />
    <Marketing />
    <HeadlessWpReact />
    <HeadlessWPFAQs />
  </div>
)
