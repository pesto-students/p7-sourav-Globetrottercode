//Exercise 5.2

const vowel = ["a", "e", "i", "o", "u"];

function vowelCount(word) {
  const lowerCaseWord = word.toLowerCase();
  console.log(lowerCaseWord);
  const vowelMap = new Map();
  for (const el of lowerCaseWord) {
    console.log(`The term is ${el}`);
    if (vowel.includes(el)) {
      console.log(`${el} is a vowel`);
      if (!vowelMap.has(el)) {
        console.log(`${el} key is not present in Map`);
        let c = 0;
        for (ltr of lowerCaseWord) {
          if (ltr === el) {
            c++;
          }
        }
        console.log(`${el} is present ${c} times`);
        vowelMap.set(el, c);
      } else {
        console.log(`${el} key is present in Map`);
      }
    } else {
      console.log(`${el} is not a vowel`);
    }
  }
  return vowelMap;
}

console.log(vowelCount("abacbcdedeaAEIOU"));
