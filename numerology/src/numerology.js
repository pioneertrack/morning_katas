//birthday constructor
function Birthday(date) {
  this.dateString = '' + date.getMonth() + date.getDate() + date.getFullYear();
}

//Birthday functions
Birthday.prototype.getMagicNumber = function() {
  var current = 0;
  var i = 0;
  while (i < this.dateString.length) {
    current += parseInt(this.dateString[i]);
    if (current > 9) {
      current = Number(String(current)[0]) + Number(String(current)[1]);
    }
    i++
  }
  return current;
}
