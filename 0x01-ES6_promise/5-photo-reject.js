export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
console.log(uploadPhoto('ola.jpg'));
