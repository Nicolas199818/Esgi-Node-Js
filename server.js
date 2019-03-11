const express = require('express')
const app = express();
var bodyParser = require('body-parser')

app.use(express.json());

app.get('/hello', function (req, res) {
  res.send('Hello World!');
})

app.post('/chat',function(req,res){
	if(req.body.msg == 'meteo'){
		res.send('Il fait beau')
	}
	if(req.body.msg == 'ville'){
		res.send('Nous sommes à Paris')
	}
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
})