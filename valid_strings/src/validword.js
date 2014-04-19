  function Dictionary(word_array) {
    this.content = word_array;
    this.first = this.content[0];
  }

  var allElementsAreTrue = function(value, index, array) {
    if (value === true) {
      return true;
    } else {
      return false;
    }
  }

  var oneElementIsTrue = function(array) {
    return array.indexOf(true) != -1 ? true : false;
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
      outcome = results.every(allElementsAreTrue);
      output.push(outcome);
    });    
    return oneElementIsTrue(output);
  };

