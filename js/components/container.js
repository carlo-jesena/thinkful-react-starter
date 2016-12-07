import React from 'react';
import Search from './search';
import List from './list';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:'', repositories:['Carlo','Chris','Casey']};
    this.userName = this.userName.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }

  userName(event) {
    this.setState({username: event.target.value});
      //let results = fetch(`https://api.github.com/users/${term}/repos`)
      //console.log(results);
      console.log(this.state.username);
  };

  onAddSubmit(event){
    event.preventDefault();
    console.log('ready to fetch api in onAddSubmit function')
  }

  render() {
    return(
      <div className = 'Container'>
        <Search onInputChange={this.userName} onInputSubmit={this.onAddSubmit}/>
        <List name = {this.state.username} repos = {this.state.repositories} />
      </div>
    );
  }
}
