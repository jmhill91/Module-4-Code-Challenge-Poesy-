import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    poems: [],
    username: 'Please Login',
    typeinfo: ''
  }

  handleKEyDown = (event) => {
    this.setState ({
      typeinfo: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
      this.setState ({
        username: this.state.typeinfo
      })
  }

  handleSubmitPoem = (event) => {

  }

  componentDidMount(){
    fetch(`http://localhost:3000/poems`)
    .then(resp => resp.json())
    .then(peomsData => {
    this.setState({
      poems: peomsData
    })
    })
  }


  render(){
    return (
      <div className="app">
        <div className="sidebar">
          <LoginForm
            type={this.handleKEyDown}
             submit={this.handleSubmit}/>
          <UserHeader user={this.state.username}/>
          <NewPoemForm submit={this.handleSubmitPoem} />
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
