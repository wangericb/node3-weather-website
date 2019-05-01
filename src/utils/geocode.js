const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZXJpY2J3YW5nIiwiYSI6ImNqdHJ2Y2w2ZjB1Mm0zemxsZmZjbWJwNjgifQ.bDc9NN0bdmOQ1-jbFIRoyQ&limit=1'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service! Please check network connection.', undefined)
        } else if (body.features.length === 0) {
            callback('Location not found, please try a new search.', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports = geocode