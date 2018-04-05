import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getBatches, createBatch} from '../../actions/batches'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import {withRouter} from 'react-router'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import {Link} from 'react-router-dom'

class BatchesList extends PureComponent {
  componentWillMount() {
      this.props.getBatches()
    }

  render() {
    const batches = this.props.batches
    //if (!batches) return null

    return (
      <div className="listOfBatches">
      <h2>All Batches</h2>
      {
        batches.map(batch =>
            <div>
              <h1>
                {batch.titleOfBatch}
              </h1>
              <ul>
                <li><div>{batch.id}</div></li>
                <li className="students">{batch.student.length}</li>
                <li className="startDate">{batch.startDate}</li>
                <li className="endDate">{batch.endDate}</li>
              </ul>
              <Link to={`/allStudents`}>Show all Students</Link>

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
