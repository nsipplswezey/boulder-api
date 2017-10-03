'use strict';

const Nodal = require('nodal');

class Bill extends Nodal.Model {}

Bill.setDatabase(Nodal.require('db/main.js'));
Bill.setSchema(Nodal.my.Schema.models.Bill);

module.exports = Bill;
