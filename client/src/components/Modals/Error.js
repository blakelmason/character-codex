import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function Error({ show, set, reopen }) {
  const close = () => {
    if (reopen) set({ modal: reopen })
    else set({ modal: false })
  }
  return (
    <Modal show={show} onHide={close} centered>
      <Modal.Header className="text-danger">
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Something went wrong.<span className="px-2">:(</span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close} variant="secondary" block>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Error
