


function dotenvFile (response) {
  return(
    `PORT=${response.serverPort}\nMONGO_URI=${response.mongoURI}`
  )
}


function gitIgnoreFile () {
  return(
    `node_modules\n.env`
  )
}







module.exports = {
  dotenvFile,
  gitIgnoreFile
}


