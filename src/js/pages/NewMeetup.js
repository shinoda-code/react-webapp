import React from 'react';
import NewMeetupForm from 'js/components/meetups/NewMeetupForm';

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
   fetch('https://react-getting-start-add8c-default-rtdb.firebaseio.com/meetups.json'),
   {
     method: 'POST',
     body: JSON.stringfy(meetupData),
     headlers: {
       'Content-Type': 'application/json'
     }
   };
  }

  return <section>
    <h1 className='h1ToCenter'>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </section>;
}
export default NewMeetupPage;