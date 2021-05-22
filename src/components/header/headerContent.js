/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import Nav from './nav'
import MobileNav from './mobilenav'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderContent() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8 font-work-sans text-xl">
            <Nav />
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <MobileNav />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
