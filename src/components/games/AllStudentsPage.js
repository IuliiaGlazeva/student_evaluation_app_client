import React, {PureComponent} from 'react'
import {getStudents} from '../../actions/students'
import { connect } from 'react-redux'
import { createStudent, pickRandomStudent } from '../../actions/students'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
//import { RandomStudent } from '../lib/randomfanc'


class StudentsList extends PureComponent {
  componentWillMount() {
      this.props.getStudents(this.props.match.params.id)
    }

    //handleClick = () => {
    ////  pickRandomStudent(this.props.students)
      //}


      render() {
        const {students} = this.props

        return (
          <div className="listOfStudents">
            {
              students.map(student =>
                  <div className="outer-paper">
                      <div className="block">{student.full_name}</div>
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
    //randomStudent: state.randomStudent

	}
}

export default withRouter (
  connect(mapStateToProps, {getStudents, /*pickRandomStudent*/})(StudentsList)
)
