import React, { Component } from 'react';
import './Student.css'

class Student extends Component {
  render() {
    let data = {
      fistName: 'Lucas',
      lastName: 'Guardiola',
      age: 25
    }
    return (
        <div className="student">
          <p>{ data.fistName } { data.lastName }</p>
          <p>{ data.age } años</p>
        </div>
    );
  }
}

export default Student;
