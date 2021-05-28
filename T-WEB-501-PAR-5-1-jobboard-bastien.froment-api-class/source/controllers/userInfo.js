const UserInfo = require("../models/userInfo.js");

// TODO Make user.js and userInfo.js into one controller?

module.exports = (app) => {
    app.route("/users/details")
    .get(this.fetchAll)
    .post(this.create);

    app.route("/users/details/:id")
    .get(this.fetchByUserID)
    .put(this.update)
    .delete(this.delete);

    app.route("/users/details/:email")
    .get(this.fetchByUserEmail);
};

exports.fetchAll = (req, res) => {
    UserInfo.fetchAll((err, data) => {
        if (err) res.status(500).send({
            message: err.message ||
            "Some error occured while fetching user infos."
        });
        else res.send(data);
    });
};

exports.create = (req, res) => {
    if (!req.body) res.status(400).send({
        message: "Request body is empty."
    });

    const userInfo = new UserInfo(
        req.body.firstName,
        req.body.lastName,
        req.body.summary,
        req.body.county,
        req.body.phoneNumber,
        req.body.profilePic,
        req.body.resume
    );

    UserInfo.create(userInfo, req.params.email, (err, data) => {
        if (err) res.status(500).send({
            message: err.message ||
            "Some error occured while creating user info."
        });
        else res.send(data);
    });
};

exports.fetchByUserID = (req, res) => {};

exports.fetchByUserEmail = (req, res) => {
    UserInfo.fetchByUserEmail(req.params.email, (err, data) => {
        if (err) {
            if (err.kind === "not_found") res.status(404).send({
                message: err.message ||
                `User ${req.params.email}'s info does not exist.`
            });
            else res.status(500).send({
                message: err.message ||
                `Some error occured while fetching user ${req.params.email}'s info.`
            });
        }

        else res.send(data);
    });
};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};