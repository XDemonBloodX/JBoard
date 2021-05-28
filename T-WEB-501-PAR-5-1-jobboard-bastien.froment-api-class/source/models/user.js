const db = require("../database.js");

const User = function(email, password) {
    this.email = email;
    this.password = password;

    this.date = new Date();
};

User.fetchByID = (id, result) => {
    db.query(`SELECT * FROM users WHERE userID = ${id}`, (err, res) => {
        if (err) {
            console.log(`[user] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log(`User ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

User.fetchByEmail = (email, result) => {
    db.query(`SELECT * FROM users WHERE email = ${email}`, (err, res) => {
        if (err) {
            console.log(`[user] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log(`User ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

User.fetchAll = (result) => {
    console.log("user model fetchall");

    db.query("SELECT * FROM users", (err, res) => {
        if (err) {
            console.log(`[user] Error: ${err}`);
            result(err, null);
            return;
        }

        console.log(`Users: ${res}`);
        result(null, res);
    });
};

User.create = (user, result) => {
    db.query("INSERT INTO users SET ?", user, (err, res) => {
        if (err) {
            console.log(`[user] Error: ${err}`);
            result(err, null);
            return;
        }

        console.log(`Created user: ${res} > ${{userID: res.insertID, ...user}}`);
        result(null, user);
    });
};

User.delete = (id, result) => {
    db.query(`DELETE FROM users WHERE userID = ${id}`, (err, res) => {
        if (err) {
            console.log(`[user] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.affectedRows) {
            console.log(`Deleted user ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

// TODO Implement variable size change object
User.update = (id, changes, result) => {
    db.query(`UPDATE users SET ? WHERE userID = ${id}`, changes, (err, res) => {
        if (err) {
            console.log(`[user] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.affectedRows) {
            console.log(`Updated user ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

module.exports = User;