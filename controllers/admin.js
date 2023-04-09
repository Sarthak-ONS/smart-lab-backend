exports.postUnlockingData = (req, res, next) => {
    console.log(req.body);
};

exports.postLogs = (req, res, next) => {
    console.log(req.body);
    res.status(200).json({ message: 'Logged Success' });
}