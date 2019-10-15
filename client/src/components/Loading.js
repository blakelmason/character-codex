import React from 'react'
import { Modal } from 'react-bootstrap'

import image from '../images/book.gif'

function Loading() {
  return (
    <Modal.Body>
      <div
        className="text-center d-flex align-items-center justify-content-center"
        style={{ fontSize: '2rem' }}
      >
        <img
          style={{ width: 50, height: 50 }}
          src={image}
          alt=""
          className="mr-3"
        />
        Loading. . .
      </div>
    </Modal.Body>
  )
}

export default Loading
