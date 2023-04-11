const { newTempRequests } = require("../firebase-helpers/firebase_helpers");

exports.getAuth = (req, res, next) => {
  return res.render("signup");
};

exports.signup = async (req, res, next) => {
  console.log(req.body);
  await newTempRequests(req.body)
    .then((result) => {
      res
        .status(200)
        .send(
          `<p>Your request have been submitted. Please wait for admin to respond.</p>`
        );
    })
    .catch((err) => {
      next(err);
    });
};
