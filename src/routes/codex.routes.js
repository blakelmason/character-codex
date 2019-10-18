import express from 'express'

import Codex from '../models/Codex'

const router = express.Router()

router.get('', (req, res) => {
  Codex.find({})
    .then(docs => res.send(docs.reverse()))
    .catch(err => {
      throw new Error(err)
    })
})

router.post('/new', (req, res) => {
  Codex.create(req.body)
    .then(() => res.send('Codex created.'))
    .catch(err => {
      throw new Error(err)
    })
})

router.post('/update', (req, res) => {
  const { id, ...data } = req.body
  Codex.updateOne({ _id: id }, data)
    .then(() => res.send('Codex updated.'))
    .catch(err => {
      throw new Error(err)
    })
})

export default router
