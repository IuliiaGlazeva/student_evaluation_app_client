import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudent} from '../../actions/students'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import  EvaluationForm  from './EvaluationFormCreator'
import { createEvaluation } from '../../actions/students'


class OneStudent extends PureComponent {
 componentWillMount() {
     this.props.getStudent(this.props.match.params.id)
   }

   createEvaluation = (evaluation) =>  {
     this.props.createEvaluation(evaluation, this.props.match.params.id)
   }

     render() {
       const {oneStudent} = this.props
       const evaluations = this.props.oneStudent.evaluation
       if (!this.props.oneStudent.evaluation) {
         return null
       } else {return (
         <div className="oneStudent">
           <h2>Student</h2>
                <div className="OneStudent">
                     <div>{oneStudent.full_name}</div>
                     <div>{oneStudent.url}</div>
                     {
                       evaluations.map(evaluation =>
                        <div>
                        <div>Colour:{evaluation.color}</div>
                        <div>Date:{evaluation.date}</div>
                        <div> Remark: {evaluation.remark}</div>
                        </div>
                       )
                     }
                     <Link to={`/creteStudent`}>Create Student</Link>
                 </div>
                 <div className="evaluationButton">
                  <EvaluationForm onSubmit={this.createEvaluation} />
                 </div>
         </div>
       )
   }}
}

const mapStateToProps = function (state) {
 return {
   oneStudent: state.oneStudent,
   evaluations: state.evaluations,
   evaluation: state.evaluation

 }
}

export default withRouter (
 connect(mapStateToProps, {getStudent, createEvaluation})(OneStudent)
)
