'use strict';

const Nodal = require('nodal');
const Bill = Nodal.require('app/models/bill.js');

class BillsController extends Nodal.Controller {

  index() {

    Bill.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Bill.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Bill.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Bill.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Bill.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = BillsController;
