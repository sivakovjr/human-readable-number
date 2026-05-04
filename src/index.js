module.exports = function toReadable(number) {
  const units = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) return units[number];

  let result = '';
  let currentNumber = number;

  if (currentNumber >= 100) {
    result += `${units[Math.floor(currentNumber / 100)]} hundred`;
    currentNumber %= 100;
  }

  if (currentNumber > 0) {
    if (result !== '') result += ' ';

    if (currentNumber < 20) {
      result += units[currentNumber];
    } else {
      result += tens[Math.floor(currentNumber / 10)];
      if (currentNumber % 10 > 0) {
        result += ` ${units[currentNumber % 10]}`;
      }
    }
  }

  return result;
};
