const db = require("../database.js");

const UserInfo = function(
    firstName,
    lastName,
    summary,
    county,
    phoneNumber,
    profilePic,
    resume,
    userID
) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.summary = summary;
    this.county = county;
    this.phoneNumber = phoneNumber;

    this.profilePic = profilePic;
    this.resume = resume;

    this.userID = userID;
};

UserInfo.fetchByID = (id, result) => {
    db.query(`SELECT * FROM userInfos WHERE userInfoID = ${id}`, (err, res) => {
        if (err) {
            console.log(`[userInfo] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log(`User info ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

UserInfo.fetchByUserID = (id, result) => {
    db.query(`SELECT * FROM userInfos WHERE userID = ${id}`, (err, res) => {
        if (err) {
            console.log(`[userInfo] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log(`User info ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

UserInfo.fetchByUserEmail = (email, result) => {
    db.query(`SELECT * FROM users JOIN userInfos WHERE email = ${email}`, (err, res) => {
        if (err) {
            console.log(`[userInfo] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log(`User info ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

UserInfo.fetchAll = (result) => {
    db.query("SELECT * FROM userInfos", (err, res) => {
        if (err) {
            console.log(`[userInfo] Error: ${err}`);
            result(err, null);
            return;
        }

        console.log(`User infos: ${res}`);
        result(null, res);
    });
};

UserInfo.create = (userInfo, email, result) => {
    db.query("INSERT INTO userInfos SET ?", userInfo, (err, res) => {
        if (err) {
            console.log(`[userInfo] Error: ${err}`);
            result(err, null);
            return;
        }

        console.log(`Created user info ${email}: ${res} > ${{
            userInfoID: res.insertId,
            ...userInfo
        }}`);
        result(null, {userInfoID: res.insertId, ...userInfo});
    });
};

UserInfo.delete = (id, result) => {
    db.query(`DELETE FROM userInfos WHERE userInfoID = ${id}`, (err, res) => {
        if (err) {
            console.log(`[userInfo] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.affectedRows) {
            console.log(`Deleted user info ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

UserInfo.update = (id, changes, result) => {
    db.query(`UPDATE userInfos SET ? WHERE userInfoID = ${id}`,
    changes,
    (err, res) => {
        if (err) {
            console.log(`[userInfo] Error: ${err}`);
            result(err, null);
            return;
        }

        if (res.affectedRows) {
            console.log(`Updated user info ${id}: ${res[0]}`);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

module.exports = UserInfo;