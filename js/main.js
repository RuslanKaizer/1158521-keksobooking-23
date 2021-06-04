const getRandomNumber = function (min, max) {
  const isValidCondition =  min < 0 || max < 0;
  if (isValidCondition) {
    alert('Значения не могут быть отрицательны');
    return;
  }
  if (max < min) {
    let buffer = max;
    max = min;
    min = buffer;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatingPoint = function (min, max, roundTo) {
  const isValidCondition = min < 0 || max < 0 || roundTo < 0;
  if (isValidCondition) {
    alert('Значения не могут быть отрицательны');
    return;
  }
  if (max < min){
    let buffer = max;
    max = min;
    min = buffer;
  }
  if (roundTo > 5) {
    roundTo = 5;
  }
  return parseFloat((Math.random() * (max - min) + min).toFixed(roundTo));
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)]
};

const getUniqueArray = (elements) => {
  const length = getRandomNumber(0, elements.length - 1);
  const uniqueArray = [];
  for (let i = 0; i <= length; i++) {
    uniqueArray.push(elements[i]);
  }
  return uniqueArray;
};
