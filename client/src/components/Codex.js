import React from 'react'
import { Button } from 'react-bootstrap'

function Codex({ data, i, last, set }) {
  const { name, description } = data
  return (
    <div className={`d-flex ${!last && 'mb-5'}`}>
      <div className="mr-3 h4" style={{ marginTop: 10 }}>
        {i + 1}.
      </div>
      <div
        className="flex-grow-1 border rounded shadow-sm bg-white"
        style={{ minWidth: 1 }}
      >
        <div className="border-bottom rounded-top text-left d-flex">
          <div
            className="p-2 bg-light border-right d-flex align-items-center"
            style={{ borderTopLeftRadius: '.25rem' }}
          >
            Name
          </div>
          <div
            className="d-flex align-items-center mx-2"
            style={{ minWidth: 1 }}
          >
            <span
              style={{
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden'
              }}
            >
              {name}
            </span>
          </div>
          <div className="d-flex align-items-center p-2 ml-auto">
            <div>
              <Button
                size="sm"
                className="mr-2"
                variant="outline-primary"
                style={{ whiteSpace: 'nowrap' }}
                onClick={() => {
                  document.documentElement.requestFullscreen()
                  set({ display: i })
                }}
              >
                Display
              </Button>
            </div>
            <div>
              <Button
                size="sm"
                variant="outline-primary"
                onClick={() => set({ modal: 'editCodex', edit: data })}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
        <div className="border-bottom bg-light py-1 text-center">
          Description
        </div>
        <div className="text-left p-3">
          <p
            style={{
              textAlign: 'justify',
              whiteSpace: 'pre-wrap',
              maxHeight: 500,
              overflowY: 'scroll'
            }}
          >
            {description}
          </p>
        </div>
      </div>
      {/* <EditCharacter
        character={{ name: name, artwork: artwork, description: description }}
        show={edit}
        toggle={() => toggleEdit(!edit)}
        reset={reset}
      /> */}
    </div>
  )
}

// function Artwork({ toggle, url }) {
//   return (
// <div
//   style={{
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '100vw',
//     height: '100vh',
//     background: 'rgba(0, 0, 0, 0.7)',
//     cursor: 'pointer',
//     userSelect: 'none'
//   }}
//   className="d-flex align-items-center"
//   onClick={toggle}
// >
//   <div
//     style={{
//       width: '100%',
//       height: '100%',
//       paddingTop: 100,
//       paddingBottom: 100,
//       paddingLeft: '15%',
//       paddingRight: '15%'
//     }}
//     className="d-flex justify-content-center align-items-center"
//   >
//     <Image
//       className="bg-white"
//       style={{
//         maxWidth: '100%',
//         maxHeight: '100%',
//         border: '5px solid #d9d9d9',
//         borderRadius: 10
//       }}
//       alt="Artwork not found."
//       src={url}
//     />
//   </div>
// </div>
//   )
// }

export default Codex
