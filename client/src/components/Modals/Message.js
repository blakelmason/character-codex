import React from 'react'
import { Modal } from 'react-bootstrap'

import image from '../../images/book.gif'

function Message({ message, show, animated }) {
  return (
    <Modal
      show={show}
      backdrop="static"
      centered
      className={`message text-center d-flex align-items-center justify-content-center ${animated &&
        animated + ' animated'}`}
    >
      <Modal.Body>
        <div style={{ fontSize: '2rem' }}>
          {console.log(animated)}
          {{ loading: <Loading /> }[message] || message}
        </div>
      </Modal.Body>
    </Modal>
  )
}

function Loading() {
  return (
    <>
      <img
        style={{ width: 50, height: 50 }}
        src={image}
        alt=""
        className="mr-3"
      />
      Loading. . .
    </>
  )
}

export default Message
