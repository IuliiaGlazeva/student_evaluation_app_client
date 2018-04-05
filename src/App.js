import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import BatchesList from './components/games/AllBatchesPage'
import LogoutPage from './components/logout/LogoutPage'
import BatchCreatorPage from './components/games/BatchCreatorPage'
import StudentsList from './components/games/AllStudentsPage'
import OneStudent from './components/games/Student'

import './App.css'
import TopBar from './components/layout/TopBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopBar />

          <Route exact path="/logins" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/allBatches" component={BatchesList} />
          <Route exact path="/allStudents" component={StudentsList} />
          <Route exact path="/allStudents/:id([0-9]+)" component={OneStudent} />
          <Route exact path="/createBatch" component={BatchCreatorPage} />
          <Route exact path="/" render={ () => <Redirect to="/allBatches" /> } />
        </div>
      </Router>
    )
  }
}
export default App
