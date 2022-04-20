import React, { Component } from 'react';

const students = [
	{
		name: 'Lucas Guardiola',
		courses: [
			{ name: 'Curso React JS', hours: 60 }
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
					
				</div>
		);
	}
}

export default StudentsList;
