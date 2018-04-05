import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default class BatchCreatorForm extends PureComponent {

  state = {}

  handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }
  render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="titleOfBatch">Title</label>
					<input type="text" name="titleOfBatch" id="titleOfBatch" value={
						this.state.titleOfBatch || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="startDate">StartDate</label>
					<input type="text" name="startDate" id="startDate" value={
						this.state.startDate || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="endDate">endDate</label>
					<input type="text" name="endDate" id="endDate" value={
						this.state.endDate || ''
					} onChange={ this.handleChange } />
				</div>



				<button type="submit">Create new Batch</button>
			</form>
		)
	}
}
