import React, {PureComponent} from 'react'
import { getStudents } from '../actions/students'
import { connect } from 'react-redux'
import { createStudent } from '../actions/students'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import './Styles.css'

class StudentsList extends PureComponent {
  componentWillMount() {
      this.props.getStudents(this.props.match.params.id)
  }

  createStudent = student => {
     this.props.createStudent(student, this.props.match.params.id)
   }


   renderStudentsList() {
     const { batch } = this.props

     return (
       <div>
         {batch.students &&
              batch.students.map(student => (
                <div className="outer-paper">
                  <h1>
                    {student.full_name}
                  </h1>
                  <div className="block">{student.full_name}</div>
                  <div className="block">{student.url}</div>
                  <div>{student.evaluations
              .sort()
              .slice(-1)
              .map(data => data.colourCode) }</div>
              )
       </div>
     )
   }

   render () {
     return (
       { this.renderBatch() }
     )
   }
}
