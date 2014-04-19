  function Dictionary(word_array) {
    this.content = word_array;
    this.first = this.content[0];
  }

  Dictionary.prototype.validWord = function (string) {
    var content = dictionary.content;
    content.forEach(function (word) {
      var i = 0;
      var results = [];
      var output;
      //['evil', 'dead', 'rabbit', 'zombies']
      while (i < word.length) {
        if (word[i] == string[i]) {
          results.push(true);
        } else {
          results.push(false);
        }
        i += 1;
      }
      console.log(word);
      console.log(results);
      output = results.every(function (value) {
        value = true;
      });
      console.log(output);
    });
  };

// > dictionary.validWord('evil');
// evil
// [ true, true, true, true ]
// false
// dead
// [ false, false, false, false ]
// false
// rabbit
// [ false, false, false, false, false, false ]
// false
// zombies
// [ false, false, false, false, false, false, false ]
// false
// undefined
// >