import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(getListStudents, city) {
  if (getListStudents instanceof Array) {
    return getListStudents.filter((list) => list.location === city);
  }
  return [];
}

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
