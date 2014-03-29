//birthday constructor
function Birthday(date) {
  this.date = date
}

//Birthday functions
Birthday.prototype.getMagicNumber = function() {
  var dateString = this.date.replace(/\//g, '')
  var current = 0;
  var i = 0;
  while (i < dateString.length) {
    current += parseInt(dateString[i]);
    if (current >= 10) {
      current = current.toString();
      current = parseInt(current[0]) + parseInt(current[1]);
    }
    i++
  }
  return current;
}
