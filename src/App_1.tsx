import { useState } from 'react';
import  List from './components/List';
import  AddToList from './components/AddToList';


export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}


function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'Max',
      age: 27,
      url: 'https://picsum.photos/200/300/?random',
      note: 'I like to play guitar',
    }
  ]);


  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
