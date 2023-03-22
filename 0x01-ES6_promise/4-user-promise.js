export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}

console.log(signUpUser('Ola', 'Aliyu'));
