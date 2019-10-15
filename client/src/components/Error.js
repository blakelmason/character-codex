import React from 'react'
import { Modal } from 'react-bootstrap'

function Error() {
  return (
    <Modal.Body>
      <div
        className="text-center d-flex align-items-center justify-content-center"
        style={{ fontSize: '2rem' }}
      >
        <div>
          <span className="text-danger">Error:</span> Something went wrong.{' '}
          <span className="px-2">:(</span>
        </div>
      </div>
    </Modal.Body>
  )
}

export default Error
