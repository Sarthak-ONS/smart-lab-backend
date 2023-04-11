const axios = require("axios");

exports.unlockDoor = (req, res, next) => {
  console.log(req.body, "////////////////");
  axios
    .post(`${process.env.PYTHON_SERVER_URL}/unlockDoor`, {
      user_id: req.body.user_id,
      door_id: "dasdakdbdiua2387gbffbsj",
      unlockedAt: `${new Date().toISOString()}`,
      user: {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
      },
    })
    .then((result) => {
      console.log(result.data);
      res.status(200).json({ message: "Door Unlocked!" });
    })
    .catch((err) => {
      next(err);
    });
};

exports.lockDoor = (req, res, next) => {
  console.log(req.body, "////////////////");
  axios
    .post(`${process.env.PYTHON_SERVER_URL}/lockDoor`, {
      user_id: req.body.user_id,
      door_id: "dasdakdbdiua2387gbffbsj",
      unlockedAt: `${new Date().toISOString()}`,
      user: {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
      },
    })
    .then((result) => {
      console.log(result.data);
      res.status(200).json({ message: "Door Locked!" });
    })
    .catch((err) => {
      next(err);
    });
};
