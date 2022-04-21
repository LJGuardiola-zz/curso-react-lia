import React, { Component } from 'react';
import StudentForm from '../student-form/StudentForm';
import StudentsList from '../students-list/StudentsList';

class Container extends Component {
  render() {
    return (
        <div>
          <StudentForm/>
          <StudentsList/>
        </div>
    );
  }
}

export default Container;
