import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axios from 'axios'

import Error from './Error'

class EditCharacter extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.default() }
  }

  default() {
    const character = this.props.character
    console.log(character)
    return {
      name: character.name || '',
      description: character.description || '',
      art: character.art || '',
      validated: false
    }
  }

  handler = event => this.setState({ [event.target.name]: event.target.value })

  submit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      this.setState({ show: false })
      const m = this.props.modal
      m({ m: true, mBody: 'loading' })
      axios
        .post('/codex/update', {
          name: this.state.name,
          description: this.state.description,
          art: this.state.art
        })
        .then(() => {
          this.setState({ ...this.default() })
          this.props.reset()
          const time = 1000
          setTimeout(() => m({ mAnimation: 'fadeOut faster' }), time)
          setTimeout(
            () => m({ mBody: 'updated', mAnimation: 'fadeIn faster' }),
            time + 500
          )
          setTimeout(() => m({ mAnimation: false }), time + 1000)
          setTimeout(() => m({ m: false, mAnimation: '' }), time + 1500)
        })
        .catch(err => {
          console.error(err)
          m({ mBody: <Error /> })
          setTimeout(() => m({ m: false }), 2000)
        })
    }
    this.setState({ validated: true })
    event.preventDefault()
  }
  render() {
    const { name, description, art, validated } = this.state
    return (
      <Modal
        show={this.props.show}
        centered
        onHide={this.props.toggle}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>New Character</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.submit} noValidate validated={validated}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={this.handler}
                value={name}
                name="name"
                defaultValue={this.props.default}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Artwork URL</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={this.handler}
                value={art}
                name="art"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows="10"
                onChange={this.handler}
                value={description}
                name="description"
              />
            </Form.Group>
            <hr />
            <div className="text-right">
              <Button
                variant="secondary"
                onClick={this.props.toggle}
                className="mr-3"
              >
                Close
              </Button>
              <Button variant="primary" type="submit">
                Create Codex
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default EditCharacter
