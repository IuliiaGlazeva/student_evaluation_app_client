import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'
import './LoginForm.css'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
		if (this.props.user) return (
			<Redirect to='/allBatches'/>
		)

		return (
			<div className='LoginPage'>

				<LoginForm class="loginForm" onSubmit={this.handleSubmit} />

        { this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		user: state.login.user,
    error: state.login.error
	}
}

export default connect(mapStateToProps, {login})(LoginPage)
