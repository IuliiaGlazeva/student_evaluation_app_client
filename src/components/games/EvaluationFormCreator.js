import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default class EvaluationForm extends PureComponent {
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
					<label htmlFor="color">Colour
					</label>
					<input type="text" name="color" value={
						this.state.color || ''
					} onChange={ this.handleChange } />
				</div>
				<div>
					<label htmlFor="remakr">remark</label>
					<input name="remark" id="remark" value={
						this.state.remark || ''
					} onChange={ this.handleChange } />
        </div>

				<div>
					<label htmlFor="date">date</label>
					<input name="date" id="date" value={
						this.state.date || ''
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
