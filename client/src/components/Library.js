import React from 'react'
import Codex from './Codex'

function Library({ library, set }) {
  return (
    <div className="p-4 border shadow-sm rounded-lg bg-white">
      {library.map((codex, index) => (
        <Codex
          data={codex}
          i={index}
          key={codex._id}
          last={index === library.length - 1 ? true : false}
          set={set}
        />
      ))}
    </div>
  )
}

export default Library
