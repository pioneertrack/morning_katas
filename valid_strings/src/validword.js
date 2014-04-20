  function Dictionary(word_array) {
    this.content = word_array;
    this.first = this.content[0];
  }

  var enoughElementsAreTrue = function (array, length) {
    //[false, false, true, true, true, true]
    i = 0;
    array.forEach(function (outcome) {
      if (outcome === true) {
        i++;
      }
    });
    return i == length ? true : false;
  };

  var oneElementIsTrue = function(array) {
    return array.indexOf(true) != -1 ? true : false;
  }

  Dictionary.prototype.validWord = function (string) {
    var content = this.content;
    var matchArrayForEachWord = [];
    var sumLengthOfMatches = 0;
    //content = ["evil", "dead", "rabbit", "zombies"] 
    content.forEach(function (word) {
      var i = 0;
      var j = 0;
      var matchArrayForEachLetter = [];
      while (i < string.length && word[j] != undefined) {
        //codewars
        if (word[j] === string[i]) {
          // cod codewars
          matchArrayForEachLetter.push(true);
          j++;
        } else {
          matchArrayForEachLetter.push(false);
        }
        i+=1;
      }
      if (enoughElementsAreTrue(matchArrayForEachLetter, word.length) === true) {
        sumLengthOfMatches += word.length;
        matchArrayForEachWord.push(true);
      }   
    }); 
    return sumLengthOfMatches > string.length ? false : oneElementIsTrue(matchArrayForEachWord);
  };


 // if the sum of the length of all winning matches != string.length ? false : output

  // arghhhhhhhh
  // dictionary = new Dictionary(['cod', 'dewa', 'ars']);
  //   expect(dictionary.validWord('codewars')).toBe(false);
//   > string = ['cod', 'dewa', 'ars'].join('');
// 'coddewaars'

