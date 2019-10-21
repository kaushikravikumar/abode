import Fetch from 'node-fetch'

const mapAPIKey = "API KEY" // TODO MOVE THIS TO SECRETS FILE
const geocodeAPIURL = "https://maps.googleapis.com/maps/api/geocode/json?"

export default async function getLatLng(address) {
    return await Fetch(geocodeAPIURL + "address=" + address.replace(" ", "+") + "&key=" + mapAPIKey)
    .then(res => res.json())
    .then(json => json['results'][0]['geometry']['location'])
    .catch(err => err);
}