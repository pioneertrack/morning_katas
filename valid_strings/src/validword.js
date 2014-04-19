  function Dictionary(word_array) {
    this.content = word_array;
    this.first = this.content[0];
  }

  Dictionary.prototype.validWord = function (string) {
    var content = this.content;
    var output = [];
    //content = ["evil", "dead", "rabbit", "zombies"] 
    content.forEach(function (word) {
      var i = 0;
      var results = [];
      while (i < word.length) {
        if (word[i] === string[i]) {
          results.push(true);
        } else {
          results.push(false);
        }
        i += 1;
      }
      outcome = results.every(function (value, index, ar) {
        if (value === true) {
          return true;
        } else {
          return false;
        }
      });
      output.push(outcome);
    });    
    return output.indexOf(true) != -1 ? true : false;
  };