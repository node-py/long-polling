const express = require('express');
const app = express();
const bodyParser = require('body-parser')

var requestCounter=0;
var responses = {
  "room_abc": []
};

app.get('/', function (req, res){
  requestCounter += 1;
  var room = "room_abc";
  console.log("request counter : " + requestCounter);
  responses[room].push(res);

  if(requestCounter%3 === 0){
    responses["room_abc"].forEach((res, i) => {
      res.send("Hello to " + i + " !!!");
      res.end();
    });
  }
});

app.use(bodyParser.text({type: 'text/*'}));
app.use(bodyParser.json());

app.listen(9999, function() {
  console.log('Example app listening on port 9999');
})
