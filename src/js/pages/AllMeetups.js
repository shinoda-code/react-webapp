import React from 'react';
import MeetupList from 'js/components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: 'https://via.placeholder.com/300.png/09f/fff',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should...'
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://via.placeholder.com/300.png/09f/000',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should...'
  },
];

function AllMeetupsPage() {
  return <section>
    <h1 className='h1ToCenter'>All Meetups</h1>
    <MeetupList meetups={DUMMY_DATA}></MeetupList>
  </section>;
} 

export default AllMeetupsPage;