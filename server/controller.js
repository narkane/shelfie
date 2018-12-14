module.exports = {
  create: (req, res, next) => {
    const dbI = req.app.get("db");
    const { name, price, img } = req.body;

    dbI
      .create_product([name, price, img])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "OOOOH SNAAAP IT BROKE DAWG!" });
        console.log(err);
      });
  },

  getOne: (req, res, next) => {
    const dbI = req.app.get("db");
    const { params } = req;

    dbI
      .read_product([params.id])
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({ errorMessage: "OOOOH SNAAAP IT BROKE DAWG!" });
        console.log(err);
      });
  },

  getAll: (req, res, next) => {
    const dbI = req.app.get("db");

    dbI
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "OOOOH SNAAAP IT BROKE DAWG!" });
        console.log(err);
      });
  },

  update: (req, res, next) => {
    const dbI = req.app.get("db");
    const { params, query } = req;

    dbI
      .update_product([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "OOOOH SNAAAP IT BROKE DAWG!" });
        console.log(err);
      });
  },

  delete: (req, res, next) => {
    const dbI = req.app.get("db");
    const { params } = req;

    dbI
      .read_product([params.id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "OOOOH SNAAAP IT BROKE DAWG!" });
        console.log(err);
      });
  }
};
