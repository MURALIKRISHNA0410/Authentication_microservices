module.exports = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).send('Unauthorized in api key');
    }
    next();
};