import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Card from 'material-ui/Card'
import {getBatch} from '../../actions/batches'
import {Redirect} from 'react-router-dom'
//import {addEvaluation} from '../../actions/evaluations'
import EvaluationFormCreator from './EvaluationFormCreator'

import { getEvaluation } from '../../actions/students'

class StudentsList extends PureComponent {
  componentWillMount() {
      this.props.getEvaluation(this.props.match.params.id)
    }

    render() {
      const {evaluations} = this.props
    }
  }
