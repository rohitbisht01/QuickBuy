const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rohan Joshi",
    email: "rohanjoshi@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Jay Bisht",
    email: "jaybisht@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

module.exports = users;
