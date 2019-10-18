import React, { Component } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import axios from 'axios'

class NewCodex extends Component {
  constructor(props) {
    super(props)
    this.state = this.default()
  }

  default() {
    return {
      name: '',
      description: '',
      artwork: '',
      validated: false
    }
  }

  handler = event => this.setState({ [event.target.name]: event.target.value })

  submit = event => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      const set = this.props.set
      set({ modal: 'message', message: 'loading' })
      setTimeout(() => {
        axios
          .post('/codex/new', {
            name: this.state.name,
            description: this.state.description,
            artwork: this.state.artwork
          })
          .then(() => {
            this.setState(this.default)
            this.props.getLibrary().then(() => {
              set({ animated: 'fadeOut faster' })
              setTimeout(
                () =>
                  set({
                    message: 'Codex created!',
                    animated: 'fadeIn faster'
                  }),
                500
              )
              setTimeout(() => set({ animated: '' }), 1000)
              setTimeout(() => set({ modal: false }), 1500)
            })
          })
          .catch(err => {
            console.error(err)
            set({ modal: 'error', reopen: 'newCodex' })
          })
      }, 1200)
    }
    this.setState({ validated: true })
  }

  close = () => this.props.set({ modal: false })

  render() {
    const { name, description, artwork, validated } = this.state
    return (
      <Modal show={this.props.show} centered onHide={this.close} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>New Codex</Modal.Title>
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
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Artwork URL</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={this.handler}
                value={artwork}
                name="artwork"
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

export default NewCodex
