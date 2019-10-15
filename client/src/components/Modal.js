import React from 'react'
import { Modal } from 'react-bootstrap'

import Loading from './Loading'
import Created from './Created'
import Error from './Error'

function RootModal({ show, body, animation }) {
  return (
    <Modal
      show={show}
      centered
      backdrop="static"
      size="lg"
      className={`message  ${animation && animation + ' animated'}`}
    >
      {
        {
          loading: <Loading />,
          created: <Created />,
          error: <Error />
        }[body]
      }
    </Modal>
  )
}

export default RootModal
