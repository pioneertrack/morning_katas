  function Dictionary(word_array) {
    this.content = word_array;
    this.first = this.content[0];
  }

  var allElementsAreTrue = function (value, index, array) {
    if (value === true) {
      return true;
    } else {
      return false;
    }
  }

  var sortByLength = function (array) {
    array.sort(function (a, b) {
      return a.length - b.length;
    });
    return array;
  }

  var deleteWordsThatContainOtherWords = function (array) {
    var output;
    sortByLength(array).filter(function (value, index, array) {
      if (array[index + 1] !== undefined && array[index + 1].indexOf(value) !== -1) {
        array.splice([index + 1]);
      }
    });
    return array
  };

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
  var oneElementIsTrue = function (array) {
    return array.indexOf(true) != -1 ? true : false;
  }

  Dictionary.prototype.validWord = function (string) {
    var content = this.content;
    var matchArrayForEachWord = [];
    var sumLengthOfMatches = 0;
    var wordArray = deleteWordsThatContainOtherWords(content);
    wordArray.forEach(function (word) {
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
        i += 1;
      }
      if (enoughElementsAreTrue(matchArrayForEachLetter, word.length) === true) {
        sumLengthOfMatches += word.length;
        matchArrayForEachWord.push(true);
      }
    });
    if (matchArrayForEachWord.length === 0) {
      return false;
    } else if (matchArrayForEachWord.every(allElementsAreTrue) && sumLengthOfMatches <= string.length) {
      return true;
    } else {
      return sumLengthOfMatches < string.length ? oneElementIsTrue(matchArrayForEachWord) : false;
    }
  };

