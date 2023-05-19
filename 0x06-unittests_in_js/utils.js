function Utils() { }

Utils.calculateNumber = function calculateNumber(type, a, b) {
  let round_a = Math.round(a);
  let round_b = Math.round(b);

  if (type === 'SUM') {
    return round_a + round_b;
  }

  if (type === 'SUBTRACT') {
    return round_a - round_b;
  }

  if (type === 'DIVIDE') {
    let div = round_a / round_b;
    if (round_b === 0) {
      return 'Error';
    }
    return div;
  }
}



module.exports = Utils;
