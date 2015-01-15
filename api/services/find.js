var jwt = require('jwt-simple');

module.exports = function (req, res){
  if(!req.headers.authorization) {
    return res.status(401).send({message: 'Please Log in' });
  }

  var token = req.headers.authorization.split(' ')[1];
  var payload = jwt.decode(token, "sceretKey..@");

  if(!payload.sub){
    res.status(401).send({message:'Authentication failed'});
  }

  res.json(lists);
}

var lists = [
  {
    name: 'ALL plumbers',
    voteNum: 0 
  },
  {
    name: 'NZ BEST Plumbers',
    voteNum: 3 
  },
  {
    name: 'Auckland Plumbers',
    voteNum: 0 
  },  
  {
    name: 'Parnell Plumbers',
    voteNum: 0 
  },
  {
    name: 'Saint Heliers Plumbers',
    voteNum: 0 
  }
]