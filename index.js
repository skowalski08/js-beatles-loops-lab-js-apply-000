function theBeatlesPlay(musicians, instruments) {
  var result = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var artist = musicians[i];
    
    for (var j = 0; j < instruments.length; j++) {
      var instru = instruments[i];
    }
    
    result.push(artist + ' plays ' + instru);
  }
  
return result;
}

function johnLennonFacts(array) {
  var i = 0;
  const newFacts = [];
  
  while (i < array.length) {
<<<<<<< HEAD
    var fact = `${array[i]}!!!`;
    
    i++;
    newFacts.push(fact);
  }
  
return newFacts;
}

function iLoveTheBeatles(Number) {
  var result = [];
  var num = Number + 1;
  
  if (num > 17) {
    result.push('I love the Beatles!');
  }
  
  if (num <= 17) {
   var i = 0;
  
   do {
    i++;
    result.push('I love the Beatles!');
    
    } while (i < num);
  }
  
  
return result;
=======
    var fact = array[i];
    var j = 0;
    
    while (j < fact.length - 1) {
      var word = fact[j] + "!!!";
      
    }
    i++;
    newFacts.push(fact)
  }
  
return newFacts;
>>>>>>> e035dd857c8f6c8e8719537ae1bcb6e75808b2c2
}