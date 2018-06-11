const lnkParser = require('./lnkParser')
const fullPath = 'C:\\Users\\jvarela\\Desktop\\pp.lnk'

const start = async () => {
    const res = await lnkParser(fullPath)
    console.log(JSON.stringify(res))
}

start()
