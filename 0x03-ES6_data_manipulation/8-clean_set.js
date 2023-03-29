export default function cleanSet(set, startString) {
  const filteredSet = new Set([...set].filter((value) => value.startsWith(startString)));
  const cleanedArray = [...filteredSet].map((value) => value.replace(startString, ''));
  return cleanedArray.join('-');
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
