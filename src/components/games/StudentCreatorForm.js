import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default class StudentCreatorForm extends PureComponent {
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
					<label htmlFor="fullName">Full
          Name</label>
					<input type="text" name="full_name" value={
						this.state.full_name || ''
					} onChange={ this.handleChange } />
				</div>
        <div>
					<label htmlFor="url">Add Foto</label>
					<input type="text" name="url" value={
						this.state.url || ''
					} onChange={ this.handleChange } />
				</div>


				<button
          type="submit">Add Student</button>
        <button onClick={_=>window.location.href=`/allStudents`}
            type="submit">All Students</button>
			</form>
		)
	}
}
