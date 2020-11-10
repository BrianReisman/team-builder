import React from 'react';

function MemberCard({ teamMembers, setTeamMembers }){
  // console.log(teamMembers); //*I am getting the app's state!
  // console.log(teamMembers.name); //*I am getting the app's state!
  // console.log(teamMembers.email); //*I am getting the app's state!
  // console.log(teamMembers.role); //*I am getting the app's state!
//TODO attempt to delete
// function deleteFromState(e){
//   console.log(e.target.name);
//   setTeamMembers({...teamMembers, });
// }


//I NEEDED a fragment! Must encapsulatew hat you return out of a react component
  return (
    <>
      <h3>Meet our team!</h3>

      {teamMembers.map((member) => {
        return (
          <>
            <div className="name">Name: {member.name}. Email: {member.email}. Role: {member.role}.</div>
            {/* <input type='button' name={member.name}>delete</input><br/> */}
          </>
        );
      })}
    </>
  );
}

export default MemberCard;