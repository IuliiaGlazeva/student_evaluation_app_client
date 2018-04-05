import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudent} from '../../actions/students'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import {withRouter} from 'react-router'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import {Link} from 'react-router-dom'


class OneStudent extends PureComponent {
 componentWillMount() {
     this.props.getStudent()
   }

     render() {
       const {oneStudent} = this.props

       return (
         <div className="oneStudent">
           <h2>Student</h2>
                <div>
                   <h1>
                     {oneStudent.full_name}
                   </h1>
                   <ul>
                     <li className="students">{oneStudent.url}</li>
                   </ul>
                   <Link to={`/creteStudent`}>Show Student</Link>

                 </div>
         </div>
       )
   }
}


const mapStateToProps = function (state) {
 return {
   oneStudent: state.oneStudent
 }
}

export default withRouter (
 connect(mapStateToProps, {getStudent})(OneStudent)
)
