import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

import Library from './components/Library'
import Modals from './components/Modals/Modals'

import './App.css'

class App extends Component {
  state = {
    library: [],

    //modals
    modal: [],
    message: '',
    artwork: '',
    animated: '',
    edit: {},
    reopen: ''
  }

  componentDidMount() {
    this.getLibrary()
  }

  getLibrary = () => {
    return new Promise((resolve, reject) => {
      axios
        .get('/codex')
        .then(res => this.setState({ library: res.data }, resolve()))
        .catch(err => reject(err))
    })
  }

  set = (...args) => this.setState({ ...args[0] })

  render() {
    const { set, getLibrary } = this
    const { library, ...modals } = this.state
    return (
      <div className="p-5" style={{ minWidth: 800 }}>
        <div
          className="display-4 text-center"
          style={{ fontFamily: `'Della Respira', serif` }}
        >
          D&D Character Codex
        </div>
        <div className="mt-3 mb-4 text-center" style={{ fontSize: '1.5rem' }}>
          Adventurer Information
        </div>
        <hr className="mb-4 mx-auto" style={{ maxWidth: 1200 }} />
        <div className="text-center">
          <Button
            onClick={() =>
              set({
                modal: 'newCodex',
                show: true
              })
            }
          >
            New Character
          </Button>
        </div>
        <div className="my-4 mx-auto" style={{ maxWidth: 1200 }}>
          {library.length > 0 ? (
            <Library library={library} />
          ) : (
            <div className="text-center">No codices found in your library.</div>
          )}
        </div>
        <Modals {...modals} set={set} getLibrary={getLibrary} />
      </div>
    )
  }
}

export default App
