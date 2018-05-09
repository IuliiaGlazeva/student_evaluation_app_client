import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { RandomStudent } from '../lib/randomfanc'



class RandomButton extends PureComponent {

  handleClick = () => {
    this.props.RandomStudent(students)
  }

  render() {

    return (
      <RaisedButton label="Ask random" primary={true}  onClick={this.handleClick} />

    )
  }
}

const mapStateToProps = (state) => ({
  students: state.students
})

export default connect(null, { RandomStudent })(RandomButton)
