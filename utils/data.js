const { User, Thought } = require('../models/index')

const users = [
  {
    username: 'cuma',
    email: 'cuma@gmail.com',
  },
  {
    username: 'cumau',
    email: 'cumau@gmail.com'
  }
]

const thoughts = [
  {
    thoughtText: 'I like this site!',
    username: 'cuma'
  },
  {
    thoughtText: 'I do not like this site',
    username: 'cumau'
  }
]

module.exports = {
  users,
  thoughts
}