import React, { Component } from 'react';
import './Student.css';

const randomCourses = [
  { name: 'Curso 1', hours: 20 },
  { name: 'Curso 2', hours: 25 },
  { name: 'Curso 3', hours: 60 },
  { name: 'Curso 4', hours: 120 },
  { name: 'Curso 5', hours: 55 },
  { name: 'Curso 6', hours: 42 },
  { name: 'Curso 7', hours: 80 },
  { name: 'Curso 8', hours: 75 },
  { name: 'Curso 9', hours: 55 },
];

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false,
      courses: this.props.student.courses
    };
    this.toggleCourse = this.toggleCourse.bind(this);
  }

  toggleCourse() {
    if (this.state.all) {
      this.setState(() => ({
        courses: this.props.student.courses
      }));
    } else {
      fetch('/api/courses.json')
          .then(response => response.json())
          .then(courses => {
            this.setState(() => ({
              courses: courses
            }));
          });
    }
    this.setState((state) => ({
      all: !state.all
    }));
  }

  render() {
    return (
        <div>
          <p>{ this.props.student.firstName } { this.props.student.lastName }</p>
          <button onClick={ this.toggleCourse }>{ this.state.all ? 'Mostar inscripciones' : 'Mostrar todos' }</button>
          <table className="course">
            <thead>
            <tr>
              <th>Curso</th>
              <th>Horas</th>
            </tr>
            </thead>
            <tbody>
            { this.state.courses.map((course, index) => (
                <tr key={ index }>
                  <td>{ course.name }</td>
                  <td>{ course.hours }</td>
                </tr>
            )) }
            </tbody>
          </table>
        </div>
    );
  }
}

export default Student;
