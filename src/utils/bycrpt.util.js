var bcrypt = require('bcrypt');

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("my password", salt);