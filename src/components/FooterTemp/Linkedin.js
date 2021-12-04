import React from 'react'

export default function LinkedIn() {
  return (
    <a
      href="https://www.linkedin.com/in/andrewkepson/"
      className="hover:text-purple-400"
      target="/blank"
      rel="noreferrer"
    >
      {' '}
      {/* LinkedIn Logo SVG */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
      </svg>
    </a>
  )
}