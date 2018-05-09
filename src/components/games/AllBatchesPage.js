import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getBatches, createBatch} from '../../actions/batches'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import {withRouter} from 'react-router'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import {Link} from 'react-router-dom'
import './AllBatches.css'

class BatchesList extends PureComponent {
  componentWillMount() {
      this.props.getBatches()
    }

  render() {
    const batches = this.props.batches
    //if (!batches) return null

    return (
      <div className="listOfBatches">
      <h3 className="header">All Batches</h3>
      {
        batches.map(batch =>
            <div class="outer-paper">
                <div className="block">Batch #{batch.id}</div>
                <div className="block">{batch.titleOfBatch}</div>
                <div className="block">{batch.students.length} Students</div>
                <div className="block">{batch.startDate}</div>
                <div className="block">{batch.endDate}</div>
              <Link to={`./allBatches/${batch.id}/allStudents`}>Show all Students in this Batch</Link>
            </div>
          )}
          <div className="createBatch">
          <button onClick={_=>window.location.href=`/createBatch`} className='add-button'>Create new Batch</button>
          </div>

    </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		batches: state.batches
	}
}

export default withRouter (
  connect(mapStateToProps, {getBatches})(BatchesList)
)
