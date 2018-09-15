const http = require('http')
const port = 3000
const fs = require('fs')
const path = require('path')

const fileCallback = (err, data) => {
  if (err) {
    console.log(err.message)
    return null
  }
  var content = data
  // return content
}

const requestHandler = (request, response) => {
  var file = '404 not found'

  if (fs.existsSync(`.${request.url}`)) {
    switch (path.extname(request.url)) {
      case '.html':
        file = fs.readFileSync(`.${request.url}`, 'utf8', fileCallback)
        break
      case '.css':
        file = fs.readFileSync(`.${request.url}`, 'utf8', fileCallback)
        break
      case '.js':
        file = fs.readFileSync(`.${request.url}`, 'utf8', fileCallback)
        break
      default:
        file = fs.readFileSync(`.${request.url}`, fileCallback)
        break
    }
  }
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
