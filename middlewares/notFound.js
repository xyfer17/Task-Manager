const notFound = (req, res) => res.status(404).send("Route not exits");

module.exports = notFound;
