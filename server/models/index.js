const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.user = require("./user.model.js");
db.role = require("./role.model.js");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
