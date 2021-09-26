// import React from 'react';
import React, { useState } from 'react';

const PhotoList =({ project }) => {

const [photos] =useState([
  {
    name: 'Horiseon Media Optimization',
    project: 'challenges',
    description: 'Code Refactoring',
  },
  {
    name: 'Multi-City Weather Dashboard',
    project:'challenges',
    description: 'The weather application was developed for the individual that enjoys planning ahead for vacation or outfits for the week. This application will allow for the user to review the current weather as well as the five day forecast.',
  },
  {
    name: 'Work Scheduler',
    project: 'Challenges',
    description: 'Develop a daily work scheduler',
  },
  {
    name: 'The Casual Observer',
    project: 'challenges',
    description: 'The Casual Observer is a blog site that enable the knowledge thirsty individual to publish articles, blog posts, thoughts, and opinions; as well as review the aforementioned by other members.',
  },
  {
    name: 'P3 Corp',
    project: 'challenges',
    description: 'PS Corp’s back end for your e-commerce site. The application will provide owners with vital statistic on stock. This will allow for owners to determine revenue flow; popularity of item; as well as make adjustment in terms of marketing based on sales. The application tracks product, stock, and by Category. The application also allows for owners to easily updates Tag, categories, and products.',
  },
  {
    name: 'The Ultimate ReadMe',
    project: 'challenges',
    description: 'The Readme Generator is design to create a Professional Readme file for an open source project app. The Readme Generator will generate a file that informs the user of purpose of the app, how to install the app, how to report issues, and how to make contributions, which will allow for other developers to contribute to the success of the project.',
  },
  {
    name: 'Note Taker',
    project: 'challenges',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
    name: 'Email Regex',
    project: 'challenges',
    description: 'An individual that possesses an on-line account know the importance of having their email address validated for access to accounts that may contain sensitive information. Thus, this is an important expression that a developer is required to build into the application, in order to protect their user personal contact information and financial information. As well as to ensure that communication with their users are being accessed by the appropriate individual.  Regex is an acronym for regular expressions. Regular expression is a string of characters that allows developer to establish patterns that assist in matching, locating and managing data. The regular expression that we will be evaluating in this tutorial is Email validation (/^([a-z0-9_.- ]+)@([ \da-z.-]+).([a-z.]{2,6})$/ ).',
  },
  {
    name: 'QKP',
    project: 'challenges',
    description: 'The QKP is the social network web application backend. The app allows users to share their thoughts, react to friends thoughts, and create a friend list.',
  },
  {
    name: 'P3S Corp Budget Tracker',
    project: 'challenges',
    description: 'Backend Design: The PS Corp Budget Tracker application allows Users offline access and functionality to track their budget. The User will be able to add expenses and deposits to their budget with or without a connection. The Users budget tracker will be updated with transactions entered offline, the total will be updated when the User is goes online.',
  },
  {
    name: 'Portfolio Patrena Smith',
    project: 'challenges',
    description: 'The Portofolio provides an employer with an high level overview of my professional work experience and body of work as a Coding student.',
  },
  {
    name: 'Apple Book Worm',
    project: 'challenge',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  // {
  //   name: 'Redux Store',
  //   project: 'challenge',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  // },
  {
    name: 'Mobile Drive in Theater',
    project: 'TeamProject',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
  {
    name: 'Stack Underflows',
    project: 'Team Project',
    description: 'The Stack-Underflow app is a diversified resource center where fledgling coders go to expand their knowledge to the next level. It provides coders with resources to ignite their light about a subject matter. The application provides references to websites, books, coding puzzles, and answer to questions submitted.',
  },
  // {
  //   name: 'The Salon',
  //   project: 'Team Project',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  // }, 
]); 

const currentPhotos = photos.filter((photo) => photo.project === project);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image,i)=>(
          <img
          src={require(`../../assests/small/${projec}/${i}.jpg`)}
          alt={image.name}
          className="img-thumbnail mx-1"
          key={image.name}/>
        ))}
    </div>
    </div>
  );
}

export default PhotoList;