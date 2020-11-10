import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Membercard from './member-card'

function App() {
  const [ teamMembers, setTeamMembers ] = useState([]); //*Make this an array of objects. One array index per team member which is an object containing name, email, and role.
  console.log(teamMembers); //* this works! At the start it is an empty array.

  return (
    <div className="App">
      <header className="App-header">
        {/* //* BELOW, I am passing the Form compomenet access ot the teamMember state, which it might not need, and the setTeamMembers function which it will need because when the form is submitted, I will want to track that in the app's state */}
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
      <Membercard teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
      </header>
    </div>
  );
}

export default App;
