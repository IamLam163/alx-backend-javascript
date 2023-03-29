export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const filteredSet = [...set].filter((value) => {
    if (typeof value !== 'string') {
      return false;
    }
    if (!value.startsWith(startString)) {
      return false;
    }
    const valueSubStr = value.substring(startString.length);
    if (valueSubStr && valueSubStr !== value) {
      parts.push(valueSubStr);
    }
    return true;
  });
  return parts.join('-');
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
