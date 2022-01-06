import React from 'react';
import { IState as IProps } from '../App_1';

// export default function List(props: IProps) {
//     return (
//         <div>
//             I am a list
//         </div>
//     )
// }

// Alternative way to write the above code in a more specific way
const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li key={person.name} className="list">
          <div>
            <img src={person.url} alt="" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age}</p>
          <p>{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
