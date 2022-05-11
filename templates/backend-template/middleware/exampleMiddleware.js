module.exports = {
  middleware 
}

async function middleware (req, res, next){
  const yourCool = true
  
  if (yourCool) {
    next()
  } else {
    res.status(400).send('Bad Request')
  }
}