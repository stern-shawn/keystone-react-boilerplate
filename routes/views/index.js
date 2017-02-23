exports = module.exports = function(req, res) {
  // Dispatch our react app's base index.html file
  res.sendFile(__dirname + '/index.html');
}
