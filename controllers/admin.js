const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

let transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "herculesproject7@outlook.com",
    pass: "hercules7@7",
  },
});

exports.sendEmail = async (req, res, next) => {
  const { name, email } = req.body;
  console.log(req.body);

  transporter.sendMail(
    {
      from: "herculesproject7@outlook.com",
      to: email,
      bcc: [
        "agarwalsarthak456@gmail.com",
        "gsamarth14@gmail.com",
        "bookexpo1810@gmail.com",
      ],
      subject: "Verification Successfull!",
      text: `
      Dear ${name},
      Your details have been verified by the admin.

      Regards,
      Ni LabVIEW Academy
      `,
    },
    (err, inf) => {
      if (err) {
        res.status(500).json({ message: "Could Not send Mail!" });
      }
      res.status(200).json({ message: "Mail has beeen sent!" });
    }
  );
};

exports.postUnlockingData = (req, res, next) => {
  console.log(req.body);
};

exports.postLogs = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: "Logged Success" });
};
