import React, {useState}  from 'react';

function Form(props) {
//*importing props from app.js
  const { teamMembers, setTeamMembers} = props; //* destructuing uses {} while useState uses []
    // console.log(teamMembers); //* coming from app.js successfully!
    // console.log(setTeamMembers); //* coming from app.js successfully!
//*creating state of this component of the new member being added to the form.
  const [ newMember, setNewMember ] = useState({name: '', email: '', role: ''}); //* this is for the form specifically and THIS current input not the entire list.
    console.log(newMember);

  const onSubmit = function(e){
    e.preventDefault(); // works!
    setTeamMembers([...teamMembers, newMember]); //TODO **** started with everything inside of {} ***** ODOT//
    //todo clear field values on submit. Either nest functions here or build elsewhere and inboke here
    //* I want to take my newMember and set them to my teamMembers state
  }



const onChangeCB = function(e){
  // console.log(e); //returns the whole shabang!
  // console.log(e.target); //returns the html element w/attributes
  // console.log(e.target.value); //returns the value of what is in the input
  // console.log(e.target.name); //returns the name attribute of the input
//*when the e.target.value is changed (ie typing has happened) I want to update the state to match.
//TODO setTeamMembers is the setter function for my useState so this is the way to update state. As a function it uses () to take its arguments. I am passing here an OBJECT so I need to wrap it in {}. First I take the starting start which the spread operator does //...teamMembers// as the first parameter for spread operator. I THINK but am not sure that what follows the comma //,// is what you want to append ONTOP OF the original state. I do not know what //e.target.name// needs to be in []
  setNewMember({...newMember, [e.target.name]: e.target.value});
  // setTeamMembers(...teamMembers, [event.target.name: event.target.value])
}

  return(
    <form onSubmit={onSubmit}>
      <label> Name:
        <input
          name='name' type="text" placeholder='what are you called?'
          onChange={onChangeCB}
        />
      </label>
      <br/>
      <label> Email:
        <input
          name='email' id='email' type="text" placeholder='digital P.O. box if you would'
          onChange={onChangeCB}/>
      </label>
      <br/>
      <label htmlFor="role"/> Role:
        <input
          name='role' id='role' type="text" placeholder="What's your rank?"
          onChange={onChangeCB}
          />
      <br/>
      {/* <input type="button" value="This is an input type='button'"/><br/> */}
      <button>This is an HTML button tag</button>
    </form>
  )

}


export default Form;