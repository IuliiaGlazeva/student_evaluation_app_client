import React, {PureComponent} from 'react'
import './LoginForm.css'


export default class LoginForm extends PureComponent {
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
			<form className='loginForm' onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor='email'>Email </label>
					<input type='email' name='email' className="input" id='email' value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor='password'>Password </label>
					<input className="input" type='password' name='password' id='password' value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<button className="button" type='submit'>Login</button>
			</form>
		)
	}
}
