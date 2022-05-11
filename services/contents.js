


function dotenvFile (response) {
  return(
    `PORT=${response.serverPort}\nMONGO_URI=${response.mongoURI}`
  )
}






module.exports = {
  dotenvFile
}


