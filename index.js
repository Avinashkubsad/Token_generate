// console.log("creation of token ")

const jwt = require("jsonwebtoken");
const expiry = new Date();
expiry.setDate(expiry.getDate() + 90);
console.log(
  jwt.sign(
    {
      provider: "user ",
      claims: [
        "user.name",
        "user.phonenumber"
      ],
      exp: parseInt(expiry.getTime() / 1000),
    },
    "Avinash_kubsad_2025"
  )
); 