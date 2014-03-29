//birthday constructor
function Birthday(date) {
  this.month = date.getMonth().toString();
  this.day = date.getDate().toString();
  this.year = date.getFullYear().toString();
  this.dateString = this.month + this.day + this.year
}

//Birthday functions
Birthday.prototype.getMagicNumber = function() {
  var current = 0;
  var i = 0;
  while (i < this.dateString.length) {
    current += parseInt(this.dateString[i]);
    if (current >= 10) {
      current = current.toString();
      current = parseInt(current[0]) + parseInt(current[1]);
    }
    i++
  }
  return current;
}
