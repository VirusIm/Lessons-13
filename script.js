/*
function unique(arr) {
    return Array.from(new Set(arr));
  }
*/

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) { //разбитие слов
      let sorted = word.toLowerCase().split("").sort().join("");
      map.set(sorted, word);
    }
    return Array.from(map.values());
  }  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  alert( aclean(arr) );