const getPuzzle  = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error("Unable to fetch puzzle")
    }
}
/* 
const getCurrentCountry = async () =>{
    const location = await getLocation()
    const currentCountry = await getCountry(location.country)
    return currentCountry
}

// Making an HTTP request
const getCountry = async countryCode => {
    const response = await fetch("http://restcountries.eu/rest/v2/all")
    if(response.status === 200) {
        const data = await response.json()
        return data.find(country => country.alpha2Code === countryCode)
    } else {
        throw new Error("Unable the fetch country")
    }
}

const getLocation = async() => {
    const response = await fetch("http://ipinfo.io/json?token=8170923049e8f5")
    if(response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error("Unable to fetch location")
    }
}
 */

 export default getPuzzle