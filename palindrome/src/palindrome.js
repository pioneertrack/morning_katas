function palindrome(string) {
  var current = "";
  var original = string.replace(/\W/g, '').toLowerCase();
  var letterArray = string.replace(/\W/g, '').split('');
  var i = 0;
  while (i < letterArray.length) {
    current = current.concat(letterArray.pop().toLowerCase());
  }
  if (current == original) {
    return true;
  } else {
    return false;
  }
}

//Notes
// 1. replace non-word chars and whitespace with no space
// 2. split string by no space (i.e., by character) into letter array; must be a letter array to pop off individual letters
// 3. iterate over letter array, pop last element off array and concatenate with current
// 4. compare current with original