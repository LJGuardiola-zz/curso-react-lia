import React, { Component } from 'react';
import Student from '../student/Student';

const students = [
  {
    name: 'Lucas Guardiola',
    courses: [
      { name: 'Curso React JS', hours: 60 }
    ]
  },
  {
    name: 'Nico Gomez Tolosa',
    courses: [
      { name: 'Curso Angular', hours: 100 }
    ]
  }
];

class StudentsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: students
    };
  }

  render() {
    return (
        <div>
          { this.state.students.map((student, index) => (
              <Student key={ index } student={ student }></Student>
          )) }
        </div>
    );
  }
}

export default StudentsList;
