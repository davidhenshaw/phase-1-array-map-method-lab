const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let ret = tutorials.map(function(title){
    let wordArr = title.split(' ');
    
    let newWordArr = wordArr.map(function(word)
    {
      word = word[0].toUpperCase() + word.substr(1);
      return word;
    });

    return newWordArr.join(' ');
  })
  return ret;
}

titleCased();