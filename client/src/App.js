import React, { Component } from 'react'
import axios from 'axios'

import Library from './components/Library'
import CreateCodex from './components/CreateCodex'
import Modal from './components/Modal'

import './App.css'

class App extends Component {
  state = {
    library: [],
    m: false,
    mBody: 'loading',
    mAnimation: ''
  }

  componentDidMount() {
    this.getCharacters()
  }

  getCharacters = () => {
    this.setState({ loading: true })
    axios.get('/codex').then(res => {
      this.setState({ library: res.data, loading: false })
    })
  }

  modal = (...args) => this.setState({ ...args[0] })

  render() {
    const { library, loading, m, mBody, mAnimation } = this.state
    return (
      <div className="text-center p-5" style={{ minWidth: 800 }}>
        <div
          className="display-4"
          style={{ fontFamily: `'Della Respira', serif` }}
        >
          D&D Character Codex
        </div>
        <div className="mt-3 mb-4" style={{ fontSize: '1.5rem' }}>
          Adventurer Information
        </div>
        <hr className="mb-4 mx-auto" style={{ maxWidth: 1200 }} />
        {loading ? (
          <div>Perusing the archive. . .</div>
        ) : (
          <>
            <CreateCodex modal={this.modal} reset={this.getCharacters} />
            <div className="my-4 mx-auto" style={{ maxWidth: 1200 }}>
              {library.length > 0 ? (
                <Library library={library} reset={this.getCharacters} />
              ) : (
                <div>No characters have been created.</div>
              )}
            </div>
          </>
        )}
        <Modal show={m} body={mBody} animation={mAnimation} />
      </div>
    )
  }
}

export default App
