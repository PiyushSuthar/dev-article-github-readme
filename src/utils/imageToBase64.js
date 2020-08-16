const axios = require('axios').default

/**
 * 
 * @param {URL} url Image URL
 * @returns Base64 of the Image
 */
const getBase64Image = async(url)=>{
  return axios
    .get(url, {
      responseType: 'arraybuffer'
    })
    .then(response => Buffer.from(response.data, 'binary').toString('base64'))
}
module.exports = getBase64Image