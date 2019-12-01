
module.exports.logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
}

module.exports.notfound = (req, res, next) => {
    res.status(404).send("Not Found");
}

module.exports.errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).send("Something went wrong");
}