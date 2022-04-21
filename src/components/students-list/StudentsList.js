import React, { Component } from 'react';
import Student from '../student/Student';

class StudentsList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			students: []
		};
	}

	componentDidMount() {
		fetch('/api/students.json')
				.then(response => response.json())
				.then(students => {
					this.setState(() => ({
						students: students
					}));
				});
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
