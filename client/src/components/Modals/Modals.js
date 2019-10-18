import React from 'react'

import Message from './Message'
import Error from './Error'
import NewCodex from './NewCodex'
import EditCodex from './EditCodex'

function Modals(props) {
  const { modal, artwork, ...other } = props
  return (
    <>
      <Error {...other} show={modal === 'error'} />
      <NewCodex {...other} show={modal === 'newCodex'} />
      <Message {...other} show={modal === 'message'} />
      <EditCodex {...other} show={modal === 'editCodex'} />
    </>
  )
}

export default Modals
