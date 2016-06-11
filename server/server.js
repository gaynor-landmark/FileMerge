var express = require('express')
var path = require('path')
var app = express()



app.use(express.static(path.join(__dirname, 'public') ) )

app.set('port', 3000)
var server = app.listen(app.get('port'), function(){
  console.log('Listening on ' + server.address().port)
})



app.get('/', function(req, res){
  res.send('hello from express')
})
