import mongoose from 'mongoose'

const codex = new mongoose.Schema({
  name: String,
  artwork: String,
  description: String
})

const Codex = mongoose.model('Codex', codex)

export default Codex
