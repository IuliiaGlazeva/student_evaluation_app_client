import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {createBatch} from '../../actions/batches'
import BatchCreatorForm from './BatchCreatorForm'
import {Redirect} from 'react-router-dom'

class BatchCreatorPage extends PureComponent {
	handleSubmit = (batch) => {
		this.props.postBatch(batch)
	}

	render() {
		//if (this.props.signup.success) return (
			///<Redirect to="/" />
		//)
    const { history } = this.props
		return (
			<div>
				<h1>Create new Batch</h1>

				<BatchCreatorForm onSubmit={this.handleSubmit} />
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		createBatch: state.createBatch
	}
}

export default connect(mapStateToProps, {postBatch: createBatch})(BatchCreatorPage)
