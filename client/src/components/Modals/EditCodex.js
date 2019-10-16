import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axios from 'axios'

class EditCodex extends Component {
  state = {
    name: '',
    art: '',
    description: ''
  }

  componentDidUpdate = prevProps => {
    prevProps !== this.props && this.setState(this.props)
  }

  handler = event => this.setState({ [event.target.name]: event.target.value })

  submit = event => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      const set = this.context.set
      set({ show: false })
      setTimeout(
        () => set({ modal: 'message', show: true, message: 'loading' }),
        200
      )
      setTimeout(() => {
        axios
          .post('/codex/update', {
            name: this.state.name,
            description: this.state.description,
            art: this.state.art
          })
          .then(() => {
            this.context.getLibrary().then(() => {
              this.setState({ ...this.default() })
              set({ animation: 'fadeOut faster' })
              setTimeout(
                () =>
                  set({
                    message: 'Codex updated!',
                    animation: 'fadeIn faster'
                  }),
                500
              )
              setTimeout(() => set({ animation: '' }), 1000)
              setTimeout(() => set({ show: false }), 1500)
            })
          })
          .catch(err => {
            console.error(err)
            set({ show: false })
            setTimeout(() => set({ show: true, modal: 'error' }), 200)
          })
      }, 1200)
    }
    this.setState({ validated: true })
  }

  toggle = () => this.context.set({ show: false })

  render() {
    const { name, description, art, validated } = this.state
    return (
      <Modal show={this.props.show} centered onHide={this.toggle} size="lg">
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
                onClick={this.toggle}
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

export default EditCodex

// class EditCodex extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { ...this.default() }
//   }

//   default() {
//     const data = this.props.data
//     return {
//       name: data.name || '',
//       description: data.description || '',
//       art: data.art || '',
//       validated: false
//     }
//   }

//   handler = event => this.setState({ [event.target.name]: event.target.value })

//   submit = event => {
//     const form = event.currentTarget
//     if (form.checkValidity() === false) {
//       event.stopPropagation()
//     } else {
//       this.setState({ show: false })
//       const set = this.context.set
//       set({ show: true, modal: 'loading', })
//       setTimeout(() => {
//         axios
//         .post('/codex/update', {
//           name: this.state.name,
//           description: this.state.description,
//           art: this.state.art
//         })
//         .then(() => {
//           this.setState({ ...this.default() })
//           this.context.getLibrary()
//           setTimeout(() => set({ mAnimation: 'fadeOut faster' }), time)
//           setTimeout(
//             () => set({ mBody: 'updated', mAnimation: 'fadeIn faster' }),
//             time + 500
//           )
//           setTimeout(() => set({ mAnimation: false }), time + 1000)
//           setTimeout(() => set({ m: false, mAnimation: '' }), time + 1500)
//         })
//         .catch(err => {
//           console.error(err)
//           set({ mBody: <Error /> })
//           setTimeout(() => set({ m: false }), 2000)
//         })
//       }, 1000)
//     }
//     this.setState({ validated: true })
//     event.preventDefault()
//   }
//   render() {
//     const { name, description, art, validated } = this.state
//     return (
//       <Modal
//         show={this.props.show}
//         centered
//         onHide={this.props.toggle}
//         size="lg"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>New Codex</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={this.submit} noValidate validated={validated}>
//             <Form.Group>
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 onChange={this.handler}
//                 value={name}
//                 name="name"
//                 defaultValue={this.props.default}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Artwork URL</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 onChange={this.handler}
//                 value={art}
//                 name="art"
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 required
//                 as="textarea"
//                 rows="10"
//                 onChange={this.handler}
//                 value={description}
//                 name="description"
//               />
//             </Form.Group>
//             <hr />
//             <div className="text-right">
//               <Button
//                 variant="secondary"
//                 onClick={this.props.toggle}
//                 className="mr-3"
//               >
//                 Close
//               </Button>
//               <Button variant="primary" type="submit">
//                 Create Codex
//               </Button>
//             </div>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     )
//   }
// }

// export default EditCodex
