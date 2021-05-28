const Offer = require("../models/offer.js");

module.exports = (app) => {
    app.route("/offers")
    .get(this.fetchAll)
    .post(this.create);

    app.route("/offers/:id")
    .get(this.fetchByID)
    .put(this.update)
    .delete(this.delete);
};

exports.fetchAll = (req, res) => {
    Offer.fetchAll((err, data) => {
        if (err) res.status(500).send({
            message: err.message ||
            "Some error occured while fetching offers."
        });
        else res.send(data);
    });
};

exports.create = (req, res) => {
    if (!req.body) res.status(400).send({
        message: "Request body is empty."
    });

    const offer = new Offer(
        req.body.title,
        req.body.shortDescription,
        req.body.description,
        req.body.job,
        req.body.contract,
        req.body.county,
        req.body.salary,
        req.body.tags
    );

    Offer.create(offer, (err, data) => {
        if (err) res.status(500).send({
            message: err.message ||
            "Some error occured while creating an offer."
        });
        else res.send(data);
    });
};

exports.fetchByID = (req, res) => {
    Offer.fetchByID(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({
                message: err.message ||
                `Offer ${req.params.id} does not exist.`
            });
            else res.status(500).send({
                message: err.message ||
                `Some error occured while fetching offer ${req.params.id}.`
            });
        }
        
        else res.send(data);
    });
};

exports.update = (req, res) => {
    if (!req.body) res.status(400).send({
        message: "Request body is empty."
    });

    const changes = req.body;
    Offer.update(req.params.id, changes, (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({
                message: err.message ||
                `Offer ${req.params.id} does not exist.`
            });
            else res.status(500).send({
                message: err.message ||
                `Some error occured while updating offer ${req.params.id}.`
            });
        }

        else res.send(data);
    });
};

exports.delete = (req, res) => {
    Offer.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({
                message: err.message ||
                `Offer ${req.params.id} does not exist.`
            });
            else res.status(500).send({
                message: err.message ||
                `Some error occured while deleting offer ${req.params.id}.`
            });
        }

        else res.send({
            message: `Offer ${req.params.id} was deleted successfully`
        });
    });
};