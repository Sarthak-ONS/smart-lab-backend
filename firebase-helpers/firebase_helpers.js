const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

const serviceAccount = require("../user-app-labview-1436047c53dc.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

exports.newTempRequests = async (data) => {
  const userCol = db.collection("NewAdminRequests");
  await userCol
    .add({ id: "", createdAt: Date.now(), ...data })
    .then(async (result) => {
      await db
        .collection("NewAdminRequests")
        .doc(result.id)
        .update({ id: result.id });
    })
    .catch((err) => {
      console.log(err);
    });
};
