import React from 'react'
import Codex from './Codex'

function Library({ library, reset }) {
  return (
    <div className="p-4 border shadow-sm rounded-lg">
      {library.map((codex, index) => (
        <Codex
          {...codex}
          i={index}
          key={`codex-${index}`}
          last={index === library.length - 1 ? true : false}
          reset={reset}
        />
      ))}
    </div>
  )
}

export default Library
