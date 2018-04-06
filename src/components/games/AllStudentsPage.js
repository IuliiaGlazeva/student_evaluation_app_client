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
import './allStudents.css'


 class StudentsList extends PureComponent {
  componentWillMount() {
      this.props.getStudents(this.props.match.params.id)
    }

      render() {
        const {students} = this.props

        return (
          <div className="listOfStudents">
            {
              students.map(student =>
                  <div className="outer-paper">
                    <h1>
                      {student.full_name}
                    </h1>

                      <div className="block">{student.id}</div>
                      <div className="block">{student.url}</div>

                    <Link to={`/allStudents/${student.id}`}>Show Student</Link>

                  </div>
                )}
                <div className="createSt">
                <button onClick={_=>window.location.href=`/createStudent`} className='add-button'>Create new Student</button>
                </div>
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
