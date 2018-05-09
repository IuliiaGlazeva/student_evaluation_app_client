import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import green from './happy.jpg'
import yellow from './yellow.png'
import red from './sad.jpg'
//import './Evaluation.css'

class Evaluation extends PureComponent {

  displayColour = () => {
    const { evaluation } = this.props

    switch(evaluation.colour) {
      case 'green':
        return green
      case 'yellow':
        return yellow
      case 'red':
        return red
      default:
        return null
    }
  }

  render() {

    return(
      <div className="evaluation">
        <img alt="evaluationcolour" src={ this.displayColour() } />
      </div>
    )
  }

}

export default connect(null)(Evaluation)
