'use strict'

var lab = exports.lab = require('lab').script()
var code = require('code')

var TAASPE = require('../..')

//

lab.experiment('connect to a trello board', function () {
  lab.test('connects yourself to trello', function (done) {
    var taaspe = TAASPE(process.env.TRELLO_API_KEY)
    done()
  })
})
