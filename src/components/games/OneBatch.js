import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import './Batch.css'

class Batch extends PureComponent {

  handleClick = () => {
    const { batch, history } = this.props
    history.push(`./allBatches/${batch.id}/students`)
  }

  render() {
    const { batch } = this.props
    return(
      <button className="oneBatch" onClick={ this.handleClick }>
        Batch #{ batch.batchNumber } <br/><br/>
        Students: { batch.student.length }
      </button>
    )
  }

}

export default withRouter(connect(null)(Batch))
