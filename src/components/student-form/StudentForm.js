import React, { Component } from 'react';
import './StudentForm.css';

class StudentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      form: {
        firstName: '',
        lastName: '',
        course: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/courses.json')
        .then(response => response.json())
        .then(courses => {
          this.setState(() => ({
            courses: courses
          }));
        });
  }

  handleChange(e) {
    let field = e.target.name;
    let value = e.target.value;
    this.setState((state) => ({
      form: {
        ...state.form, [field]: value,
      },
    }));
    console.log(this.state.form);
  }

  render() {
    return (
        <form className="form">
          <label>Nombre</label>
          <input type="text" name="firstName" value={ this.state.form.firstName } onChange={ this.handleChange }/>
          <label>Apellido</label>
          <input type="text" name="lastName" value={ this.state.form.lastName } onChange={ this.handleChange }/>
          <label>Cursos</label>
          <select name="course" onChange={ this.handleChange }>
            { this.state.courses.map((course, index) => (
                <option key={ index } value={ course.name }>{ course.name }</option>
            )) }
          </select>
          <button>Guardar</button>
        </form>
    );
  }

}

export default StudentForm;
