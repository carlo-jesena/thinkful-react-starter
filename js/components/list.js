import React from 'react';

// export default function List(props) {
//   let listArray = props.repos.map((listItem) => {
//     console.log(listItem)
//     return (
//       <li>{listItem}</li>
//     )
//   });
//   return (
//     <div className = 'list'>
//       <ul>
//         {listArray}
//       </ul>
//     </div>
//   );
//
//
// }

const List = (props) => (
    <div className = 'list'>
      <ul>
        {props.repos.map((listItem, index) => {
          return (
            <div>
          <a href = {listItem.html_url}>
                 <li key={index}>{listItem.name}</li>
                 </a>
                 <ul>

                    <li>Description: {listItem.description}</li>
                    <li>Date created: {listItem.created_at}</li>
                    <li># of issues: {listItem.open_issues}</li>
                    <li># of watchers: {listItem.watchers}</li>
                    <li># of stargazers: {listItem.stargazers_count}</li>


                 </ul>
                 </div>

          );
        })}
      </ul>
    </div>
);


export default List
