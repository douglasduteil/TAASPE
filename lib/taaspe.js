'use strict'

var assert = require('assert')
var Trello = require('node-trello')

//

module.exports = TAASPE

//

function TAASPE (apiKey) {
  var t = new Trello(apiKey)

  return {
    connect: connect.bind(null, t)
  }
}

function connect (trello, broardId) {
  assert(broardId, 'Broard id required')
  broardId = String(broardId)

  return {
    collections: collections.bind(null, trello, broardId)
  }
}

function collections (trello, broardId, collectionName) {
  assert(collectionName, 'Collection name required')
  collectionName = String(collectionName)

  return {
    find: find.bind(null, trello, broardId)
  }
}
