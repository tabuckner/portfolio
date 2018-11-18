import { Project } from './project.model';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    name: 'Time-Tracker',
    description: 'A simple time tracking app, w/ anonymous login--built in two lunch-breaks.'
    + ' Can be used to track anything from work schedules to time spent in the bathroom at work!',
    repoUrl: 'https://github.com/tabuckner/time-tracker',
    stack: [
      'Angular 6',
      'Angular Material',
      'Firebase',
      'AngularFire',
      'Jasmine',
      'Karma'
    ],
    image: 'assets/time-tracker.png',
    demoUrl: 'https://tabuckner.github.io/time-tracker/'
  },
  {
    name: 'Jira-To-Sheets',
    description: 'Small NPM Package to handle a very specific need to pull data and upload to google sheets.'
    + ' Stores encrypted credentials on the user\'s machine (if they choose to risk that) and reports on Jira data.',
    repoUrl: 'https://github.com/tabuckner/jira-to-sheets',
    stack: [
      'Node',
      'Chalk',
      'Inquirer',
      'Simple-Encryptor',
      'Google-Auth API',
      'Jira REST API'
    ],
    image: 'assets/jira-to-sheets.png',
    npmUrl: 'https://www.npmjs.com/package/jira-to-sheets'
  },
  {
    name: 'Twitter Bot',
    description: 'A twitter bot that posts inspirational bible quotes, images, responds to user interactions, and holds DM conversations.',
    repoUrl: 'https://github.com/tabuckner/bible-thumper-twitter-bot',
    stack: [
      'Node',
      'Heroku',
      'Twitter API',
    ],
    image: 'assets/twitter-bot.png',
    demoUrl: 'https://twitter.com/HillBillyNums'
  },
  {
    name: 'Workout Tracker REST API',
    description: 'Dockerized Rest API for Workout Tracker app. Handles DB interactions, and authentication.',
    repoUrl: 'https://github.com/tabuckner/workout-tracker-api',
    stack: [
      'Node',
      'Express',
      'Mongoose',
      'Docker',
      'bcrypt.js'
    ],
    image: 'assets/workout-tracker-api.png',
  },
  {
    name: 'Workout Tracker App',
    description: 'Angular 6/Angular Material web app to track a users workouts. Users can enter in their preferred excersizes, '
    + 'create routines based around those exercises--complete with goal targets, and track their routine completion progress. '
    + 'Includes a rest timer and automatic JWT token refreshing via a \'sliding session\'.',
    repoUrl: 'https://github.com/tabuckner/workout-tracker-app',
    stack: [
      'Angular 6',
      'Angular Material',
      'RxJS',
    ],
    image: 'assets/workout-tracker-app.gif',
  },
];
