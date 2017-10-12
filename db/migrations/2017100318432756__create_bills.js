'use strict';

const Nodal = require('nodal');

class CreateBills extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017100318432756;
  }

  up() {

    return [
      this.createTable("bills", [{"name":"id","type":"string"},{"name":"item_number","type":"int"},{"name":"title","type":"string"},{"name":"sponsors","type":"json"},{"name":"text","type":"string"},{"name":"fiscal_impact","type":"boolean"},{"name":"status_log","type":"json"},{"name":"question","type":"string"},{"name":"date","type":"string"},{"name":"uid","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("bills")
    ];

  }

}

module.exports = CreateBills;
