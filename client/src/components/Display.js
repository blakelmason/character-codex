import React from 'react'
import ReactDOM from 'react-dom'

import { Image, Button } from 'react-bootstrap'

const displayNode = document.getElementById('display')

function Display({ codex, set }) {
  console.log(codex)
  return ReactDOM.createPortal(
    <div className="bg-white">
      <Image
        src={codex.artwork}
        style={{ maxHeight: '60vh', maxWidth: '60%' }}
        className="border rounded-lg p-1 shadow float-left mx-5 mt-5 mb-4"
      />
      <div className="d-flex">
        <div
          className="display-4 text-center my-5 flex-grow-1"
          style={{ fontFamily: `'Della Respira', serif` }}
        >
          {codex.name}
        </div>
        <div>
          <Button
            onClick={() => {
              if (document.fullscreenElement) document.exitFullscreen()
              set({ display: false })
            }}
            className="m-3"
            variant="outline-secondary"
            size="sm"
          >
            X
          </Button>
        </div>
      </div>
      <div
        style={{
          whiteSpace: 'pre-wrap',
          fontSize: '1.2rem'
        }}
        className="mx-5 mb-5"
      >
        {codex.description}
      </div>
    </div>,
    displayNode
  )
}

export default Display
