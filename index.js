const DOMAIN = process.env.DOMAIN
const KEY = process.env.KEY

console.log('DOMAIN:', DOMAIN)
console.log('KEY:', KEY)

const axios = require('axios')

async function syncNow(domain, key) {
    try {
        const response = await axios.post(`https://${domain}.bridgeapp.com/api/admin/users/imports/sync`, {}, { headers: { Authorization: key } })

        console.log(response)

    } catch (error) {
        console.log('ERROR CAUGHT')
        console.log(`STATUS CODE: ${error.response.status}`)
        console.log(error.response.data.errors)
    }

}

syncNow(DOMAIN, KEY)