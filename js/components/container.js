import React from 'react';
import Search from './search';
import List from './list';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:'Jamie', repositories:['Carlo','Chris','Casey']};
  }
  fetchApi() { 
  const url = new URL('https://api.github.com');
  const data = {
      users: 'carlo-jesena',
  };
  Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));

  fetch(url).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  }).then(response => {
    console.log(response.Search[0].Title);
  }).catch(err => {
    console.error(err);
  });
};

  render() {
    return(
      <div className = 'Container'>
        <Search />
        <List name = {this.state.username} repos = {this.state.repositories} />
      </div>
    );
  }
}
