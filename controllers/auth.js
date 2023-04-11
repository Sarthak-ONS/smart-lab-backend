const { newTempRequests } = require("../firebase-helpers/firebase_helpers");

exports.getAuth = (req, res, next) => {
  return res.render("signup");
};

exports.signup = async (req, res, next) => {
  console.log(req.body);
  await newTempRequests(req.body)
    .then((result) => {
      res.status(200).json({ message: "Registered Succesfully!" });
    })
    .catch((err) => {
      next(err);
    });
};
