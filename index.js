function dwarfRollCall(dwarves) {
  var dwarfCount = '';
  for(let i = 0; i < dwarves.length; i++) {
    dwarfCount += `${i + 1}. ${dwarves[i]} `
  }
  return dwarfCount;
}

function summonCaptainPlanet(planeteerCalls){
  var allCapsSummon = [];
  for(let i = 0; i < planeteerCalls.length; i++) {
    allCapsSummon.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return allCapsSummon;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length <= 4) {
      return false;
    } else {
      return true;
    }
  }
}

function findTheCheese (foods) {
var noCheese = [];
for (let i = 0; i < foods.length; i++) {
    switch(foods[i]) {
      case 'cheddar':
        return 'cheddar';
      case 'gouda':
        return 'gouda';
      case 'camembert':
        return 'camembert';
    }
    noCheese.push(foods[i]);
}
if (noCheese.length === foods.length) {
  return 'no cheese!';
}
}