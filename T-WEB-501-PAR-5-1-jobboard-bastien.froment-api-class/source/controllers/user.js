const User = require("../models/user.js");

module.exports = (app) => {
    app.route("/users")
    .get(this.fetchAll)
    .post(this.create);

    app.route("/users/:id")
    .get(this.fetchByID)
    .put(this.update)
    .delete(this.delete);

    app.route("/users/:email")
    .get(this.fetchByEmail);
};

exports.fetchAll = (req, res) => {
    User.fetchAll((err, data) => {
        if (err) res.status(500).send({
            message: err.message ||
            "Some error occured while fetching users."
        });
        else res.send(data);
    });
};

exports.create = (req, res) => {
    if (!req.body) res.status(400).send({
        message: "Request body is empty."
    });

    const user = new User(
        req.body.email,
        req.body.password
    );

    User.create(user, (err, data) => {
        if (err) res.status(500).send({
            message: err.message ||
            "Some error occured while creating a user."
        });
        else res.send(data);
    });
};

exports.fetchByID = (req, res) => {
    User.fetchByID(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({
                message: err.message ||
                `User ${req.params.id} does not exist.`
            });
            else res.status(500).send({
                message: err.message ||
                `Some error occured while fetching user ${req.params.id}.`
            });
        }

        else res.send(data);
    });
};

exports.fetchByEmail = (req, res) => {
    User.fetchByEmail(req.params.email, (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({
                message: err.message ||
                `User ${req.params.email} does not exist.`
            });
            else res.status(500).send({
                message: err.message ||
                `Some error occured while fetching user ${req.params.email}.`
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
    User.update(req.params.id, changes, (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({
                message: err.message ||
                `User ${req.params.id} does not exist.`
            });
            else res.status(500).send({
                message: err.message ||
                `Some error occured while updating user ${req.params.id}.`
            });
        }

        else res.send(data);
    });
};

exports.delete = (req, res) => {
    User.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({
                message: err.message ||
                `User ${req.params.id} does not exist.`
            });
            else if (err) res.status(500).send({
                message: err.message ||
                `Some error occured while deleting user ${req.params.id}.`
            });
        }

        else res.send({
            message: `User ${req.params.id} was deleted successfully.`
        });
    });
};