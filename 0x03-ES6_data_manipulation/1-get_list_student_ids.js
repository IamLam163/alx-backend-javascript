import getListStudents from './0-get_list_students';

export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.map((list) => list.id);
}
/*
console.log(getListStudentIds('hello'));
console.log(getListStudentIds(getListStudents()));
*/
