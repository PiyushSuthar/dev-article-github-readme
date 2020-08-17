const fetchData = require("../src/fetcher/fetchData")
const renderCard = require('../src/renderer/renderCard')
const renderErr = require('../src/renderer/renderError')

module.exports = async (req, res) => {
    const { username, slug } = req.query
    if (!username) {
        return res.send({error: "Please give your username ex. ?username=YourUsername "})
    }
    try {
        const data = await fetchData(username,slug)
        res.setHeader("Content-Type", "image/svg+xml")
        res.setHeader("Cache-Control", `public, max-age=1800`);
        res.send(renderCard(data))
    } catch (err) {
        res.setHeader("Content-Type", "image/svg+xml")
        res.setHeader("Cache-Control", `public, max-age=1800`);
        res.send(renderErr())
    }
}
