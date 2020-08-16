const axios = require('axios').default
const { imageToBase64, parseDate } = require('../utils')

/**
 * @param {String} username Dev.to Username 
 */
const fetchData = async (username,slug) => {
    var response
    if (slug !== undefined) {
        response = await (await axios.get(`https://dev.to/api/articles/${username}/${slug}`)).data
    }else{
        response = await (await axios.get(`https://dev.to/api/articles?username=${username}`)).data[0]
    }
    const data = await response
    return await parseData(data)
}

/**
 * 
 * @param {OBJECT} data Parsing the data, useful for scaling the project. 
 */
async function parseData(data) {
    return {
        user: {
            name: data.user.name,
            // username: data.user.username,
            profile_img: `data:image/jpg;base64,${await imageToBase64(data.user.profile_image_90)}`
        },
        article: {
            title: data.title,
            // description: data.description,
            // cover_img: `data:image/jpg;base64,${await imageToBase64(data.cover_image || data.social_image)}`,
            comment_count: data.comments_count,
            reaction_count: data.public_reactions_count,
            publish_date: parseDate(data.published_at),
        }
    }
}

module.exports = fetchData