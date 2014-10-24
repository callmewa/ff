module.exports = function(Player) {

  Player.greet = function(msg, cb) {
    Player.findOne(function(err, player) {
      cb(null, 'Greetings... ' + player.firstname + ", " + msg);
    })
  };

  Player.remoteMethod(
    'greet',
    {
      accepts: {arg: 'msg', type: 'string'},
      returns: {arg: 'greeting', type: 'string'}
    }
  );

};
