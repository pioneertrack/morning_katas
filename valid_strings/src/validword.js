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

  var lengthOfWords = function(array, string) {
    debugger
    var lengthOfWords = array.join('').length;
    return lengthOfWords > 0 ? string.length+Math.abs(lengthOfWords-string.length) : string.length;
  }

  var enoughLettersAreTrue = function (array, length) {
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
    var length = lengthOfWords(wordArray, string);
    wordArray.forEach(function (word) { //the problem is here. for each word is not sufficient
      var i = 0;
      var j = 0;
      var matchArrayForEachLetter = [];
      while (i < length && word[j] != undefined) {
        debugger
        if (word[j] === string[i]) {
          matchArrayForEachLetter.push(true);
          j++;
        } else {
          matchArrayForEachLetter.push(false);
        }
        i += 1;
      }
      debugger
      if (enoughLettersAreTrue(matchArrayForEachLetter, word.length) === true) {
        sumLengthOfMatches += word.length;
        matchArrayForEachWord.push(true);
      } else {
        matchArrayForEachWord.push(false);
      }
    });
    debugger
    if (matchArrayForEachWord.length === 0) {
      return false;
    } else if (matchArrayForEachWord.every(allElementsAreTrue) && sumLengthOfMatches < string.length) {
      return true;
    } else if (matchArrayForEachWord.every(allElementsAreTrue) && sumLengthOfMatches > string.length) {
      return false;
    } else if (matchArrayForEachWord.every(allElementsAreTrue) == false && sumLengthOfMatches < string.length) {
      return false;
    } else {
      return sumLengthOfMatches < string.length ? false : oneElementIsTrue(matchArrayForEachWord);
    }
  };

