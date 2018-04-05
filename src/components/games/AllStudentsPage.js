import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import {withRouter} from 'react-router'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import {Link} from 'react-router-dom'
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getStudents} from '../../actions/students'



 class StudentsList extends PureComponent {
  componentWillMount() {
      this.props.getStudents(this.props.match.params.id)
    }

      render() {
        const {students} = this.props

        return (
          <div className="listOfStudents">
            <h2>All Students</h2>
            {
              students.map(student =>
                  <div>
                    <h1>
                      {student.full_name}
                    </h1>
                    <ul>
                      <li><div>{student.id}</div></li>
                      <li className="students">{student.url}</li>
                    </ul>
                    <Link to={`/allStudents/${student.id}`}>Show Student</Link>

                  </div>
                )}
          </div>
        )
    }
}


const mapStateToProps = function (state) {
	return {
		students: state.students
	}
}

export default withRouter (
  connect(mapStateToProps, {getStudents})(StudentsList)
)
