/**
 * 
 * @param {String} date IsoString
 * @returns <Date> <Month> <Year> ex. 12 Jul 2020
 */
const parseDate = (date) =>{
    const IsoStringToDate = new Date(date)
    const parsedDate = IsoStringToDate.toUTCString().slice(5).slice(0,-13)
    return parsedDate
}

module.exports = parseDate