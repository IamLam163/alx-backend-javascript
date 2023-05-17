const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const students = data.split('\n').filter(line => line !== '');
    const studentsByField = students.reduce((acc, student) => {
      const [firstname, lastname, age, field] = student.split(',');
      acc[field] = (acc[field] || []).concat(firstname);
      return acc;
    }, {});

    console.log('Number of students:', students.length);
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
