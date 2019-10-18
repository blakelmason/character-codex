import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axios from 'axios'

class EditCodex extends Component {
  state = {
    name: '',
    description: '',
    artwork: '',
    validated: false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.edit !== this.props.edit)
      this.setState({ ...this.props.edit })
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
          .post('/codex/update', {
            name: this.state.name,
            description: this.state.description,
            artwork: this.state.artwork,
            id: this.props.edit._id
          })
          .then(() => {
            this.setState({ validated: false })
            this.props.getLibrary().then(() => {
              set({ animated: 'fadeOut faster' })
              setTimeout(
                () =>
                  set({
                    message: 'Codex updated!',
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
            set({ modal: 'error', reopen: 'editCodex' })
          })
      }, 1200)
    }
    this.setState({ validated: true })
  }

  close = () => this.props.set({ modal: false })

  render() {
    const { name, description, artwork, validated } = this.state
    return (
      <Modal
        show={this.props.show}
        centered
        onHide={this.close}
        size="lg"
        backdrop="static"
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
                value={name || ''}
                name="name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Artwork URL</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={this.handler}
                value={artwork || ''}
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
                value={description || ''}
                name="description"
              />
            </Form.Group>
            <hr />
            <div className="text-right">
              <Button variant="primary" type="submit">
                Update
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
//       artwork: data.artwork || '',
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
//           artwork: this.state.artwork
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
//     const { name, description, artwork, validated } = this.state
//     return (
//       <Modal
//         show={this.props.show}
//         centered
//         onHide={this.props.close}
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
//                 value={artwork}
//                 name="artwork"
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
//                 onClick={this.props.close}
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
