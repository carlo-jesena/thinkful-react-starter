import React from 'react';

export default function List(props) {
  let listArray = props.repos.map((listItem) => {
    console.log(listItem)
    return (
      <li>{listItem}</li>
    )
  });
  return (
    <div className = 'list'>
      <ul>
        {listArray}
      </ul>
    </div>
  );


}
