const fetchData = require("../src/fetcher/fetchData")
const renderCard = require('../src/renderer/renderCard')
const renderErr = require('../src/renderer/renderError')

module.exports = async (req, res) => {
    const { username, slug } = req.query
    res.setHeader("Content-Type", "image/svg+xml")
    if (!username) {
        return res.send(renderErr("No Username 👀", "Add ?username= parameter."))
    }
    res.setHeader("Cache-Control", `public, max-age=1800`);
    try {
        const data = await fetchData(username,slug)
        res.send(renderCard(data))
    } catch (err) {
        res.send(renderErr("404 😲","Probably it's a Dark Matter."))
    }
}
