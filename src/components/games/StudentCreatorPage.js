import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {createStudent} from '../../actions/students'
import StudentCreatorForm from './StudentCreatorForm'
import {Redirect} from 'react-router-dom'

class StudentCreatorPage extends PureComponent {
	handleSubmit = (student) => {
		this.props.postStudent(student)
	}

	render() {
		//if (this.props.signup.success) return (
			///<Redirect to="/" />
		//)
    const { history } = this.props
		return (
			<div>
				<h1>Add Student</h1>

				<StudentCreatorForm onSubmit={this.handleSubmit} />
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		createStudent: state.createStudent
	}
}

export default connect(mapStateToProps, {postStudent: createStudent})(StudentCreatorPage)
