const axios = require('axios').default
const fetch = require('node-fetch')
const { imageToBase64, parseDate } = require('../utils')

/**
 * @param {String} username Dev.to Username 
 */
const fetchData = async (username,slug) => {
    if (slug !== undefined) {
        const response = await fetch(`https://dev.to/api/articles/${username}/${slug}`)
        const data = await response.json()
        return await parseData(data)
    }else{
        const response = await fetch(`https://dev.to/api/articles?username=${username}`)
        const data = await response.json()
        return await parseData(data[0])
    }
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