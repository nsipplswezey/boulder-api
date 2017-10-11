'use strict';

const Nodal = require('nodal');
const Bill = Nodal.require('app/models/bill.js');

class DatesController extends Nodal.Controller {

  get() {

    Bill.query()
	  .where()
      .end((err, models) => {

        console.log(models);
        this.respond(err || models, ['date']);

      });

  }

  post() {

    this.badRequest();

  }

  put() {

    this.badRequest();

  }

  del() {

    this.badRequest();

  }

}

module.exports = DatesController;
