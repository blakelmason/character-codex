import mongoose from 'mongoose'

const codex = new mongoose.Schema({
  name: String,
  art: String,
  description: String
})

const Codex = mongoose.model('Codex', codex)

export default Codex
