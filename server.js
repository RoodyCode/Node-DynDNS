require('dotenv').config()

let currentIP = null

if (!process.env.DDNS_URL) throw 'Error: No DDNS_URL was defined.'

const checkIP = async () => {
  // console.log('Checking IP...')
  try {
    const ipRes = await (
      await fetch('https://api.ipify.org?format=json')
    ).json()
    if (currentIP && ipRes.ip === currentIP) return //console.log('IP has not changed.')
    currentIP = ipRes.ip
    sendReq()
  } catch (err) {
    console.log(Date(), 'Error fetching IP: ' + err)
  }
}

const sendReq = async () => {
  try {
    const res = await fetch(process.env.DDNS_URL)
    console.log(res.status)
    console.log(res.statusText)
    console.log(Date())
  } catch (err) {
    console.log(Date(), 'Error updating IP:' + err)
  }
}

checkIP()
setInterval(() => checkIP(), 1000 * (process.env.DDNS_CHECKING_INTERVAL || 60))
