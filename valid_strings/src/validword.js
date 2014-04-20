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
    var outcomeForEachWord = [];
    var sumLengthOfMatches = 0;
    //content = ["evil", "dead", "rabbit", "zombies"] 
    content.forEach(function (word) {
      var i = 0;
      var j = 0;
      var outcomeForEachLetter = [];
      while (i < string.length && word[j] != undefined) {
        //codewars
        debugger
        if (word[j] === string[i]) {
          // cod codewars
          OutcomeForEachLetter.push(true);
          j++;
        } else {
          OutcomeForEachLetter.push(false);
        }
        i+=1;
      }
      debugger
      if (outcomeForEachLetter.every(allElementsAreTrue) === true) {
        sumLengthOfMatches += outcomeForEachLetter.length;
        outcomeForEachWord.push(true);
      }   
    });   
    debugger 
    return sumLengthOfMatches > string.length ? false : oneElementIsTrue(outcomeForEachWord);
  };


 // if the sum of the length of all winning matches != string.length ? false : output

  // arghhhhhhhh
  // dictionary = new Dictionary(['cod', 'dewa', 'ars']);
  //   expect(dictionary.validWord('codewars')).toBe(false);
//   > string = ['cod', 'dewa', 'ars'].join('');
// 'coddewaars'

