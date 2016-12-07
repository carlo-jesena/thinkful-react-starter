import React from 'react';
import Search from './search';
import List from './list';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:'', repositories: []};
    this.userName = this.userName.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }

  userName(event) {
    this.setState({username: event.target.value});

      //console.log(results);
      console.log(this.state.username);
  };

  onAddSubmit(event){
    event.preventDefault();
    console.log('ready to fetch api in onAddSubmit function')
    // let results = fetch(`https://api.github.com/users/${this.state.username}/repos`)
    // let newArray = this.state.repositories.slice();
    // //loop thru fetch array, take each object and pull name, push individual name into repositories
    // //set state for new repositories
    // results.map((object) => {
    //   console.log(results)
    //   newArray.push(object.name);
    // })

    let url = `https://api.github.com/users/${this.state.username}/repos`
    fetch(url)
    .then(response => response.json())
    .then(repositories => this.setState({repositories}) )
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
