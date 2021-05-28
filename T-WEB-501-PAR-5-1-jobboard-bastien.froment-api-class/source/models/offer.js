const db = require("../database.js");

// TODO Data validation
// TODO Separate creation date and update date
// TODO Simplify creation and update, depending on how we handle controllers

const Offer = function(
    title,
    shortDescription,
    description,
    job,
    contract,
    county,
    salary,
    tags,
    companyID
) {
    this.title = title;
    this.shortDescription = shortDescription;
    this.description = description;
    
    this.job = job;
    this.contract = contract;
    this.county = county;

    this.salary = salary;
    this.tags = tags;

    this.date = new Date();

    this.companyID = companyID;
};

Offer.fetchByID = (id, result) => {
    db.query(`SELECT * FROM offers WHERE offerID = ${id}`, (err, res) => {
        if (err) {
            console.log(`[offer] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log(`Offer ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

Offer.fetchAll = (result) => {
    db.query("SELECT * FROM offers", (err, res) => {
        if (err) {
            console.log(`[offer] Error: ${err}`);
            result(err, null);
            return;
        }

        console.log(`Offers: ${res}`);
        result(null, res);
    });
};

Offer.create = (offer, result) => {
    db.query("INSERT INTO offers SET ?", offer, (err, res) => {
        if (err) {
            console.log(`[offer] Error: ${err}`);
            result(err, null);
            return;
        }

        console.log(`Created offer: ${res} > ${{
            offerID: res.insertId,
            ...offer
        }}`);
        result(null, {offerID: res.insertId, ...offer});
    });
};

Offer.delete = (id, result) => {
    db.query(`DELETE FROM offers WHERE offerID = ${id}`, (err, res) => {
        if (err) {
            console.log(`[offer] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.affectedRows) {
            console.log(`Deleted offer ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

Offer.update = (id, changes, result) => {
    db.query(`UPDATE offers SET ? WHERE offerID = ${id}`,
    changes,
    (err, res) => {
        if (err) {
            console.log(`[offer] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.affectedRows) {
            console.log(`Updated offer ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

module.exports = Offer;