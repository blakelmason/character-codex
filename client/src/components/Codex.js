import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap'

import EditCharacter from './EditCharacter'

function Codex({ name, art, description, i, last, reset }) {
  const [artwork, toggleArt] = useState(false)
  const [edit, toggleEdit] = useState(false)
  return (
    <div className={`d-flex ${!last && 'mb-5'}`}>
      <div className="mr-3" style={{ marginTop: 13 }}>
        <strong>{i + 1}.</strong>
      </div>
      <div className="flex-grow-1 border rounded" style={{ minWidth: 1 }}>
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
                onClick={() => toggleArt(!artwork)}
              >
                View Artwork
              </Button>
            </div>
            {artwork && (
              <Artwork url={art} toggle={() => toggleArt(!artwork)} />
            )}
            <div>
              <Button
                size="sm"
                variant="outline-primary"
                onClick={() => toggleEdit(!edit)}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
        <div className="border-bottom bg-light py-1">Description</div>
        <div className="text-left p-3">
          <p style={{ textJustify: 'inter-word' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.{description}
          </p>
        </div>
      </div>
      <EditCharacter
        character={{ name: name, art: art, description: description }}
        show={edit}
        toggle={() => toggleEdit(!edit)}
        reset={reset}
      />
    </div>
  )
}

function Artwork({ toggle, url }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.7)',
        cursor: 'pointer'
      }}
      className="d-flex align-items-center"
      onClick={toggle}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          paddingTop: 100,
          paddingBottom: 100,
          paddingLeft: '15%',
          paddingRight: '15%'
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <Image
          className="bg-white"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            border: '5px solid #d9d9d9',
            borderRadius: 10
          }}
          alt="Artwork not found."
          src={url}
        />
      </div>
    </div>
  )
}

export default Codex
