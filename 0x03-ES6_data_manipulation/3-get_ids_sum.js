import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(total) {
  return total.reduce((accumulator, student) => accumulator + student.id, 0);
}

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
