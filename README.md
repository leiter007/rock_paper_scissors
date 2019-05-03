# Rock Paper Scissors challenge

## Description
This repo contains the work initiated with a challenge on the third week of the [Craft Academy Bootcamp](https://craftacademy.se/english/curriculum/), by April 2019 Cohort.

The challenge was to build a Rock, Paper Scissors game as an individual challenge - during a span of 14 days - as a simulation of a tech interview. The requirements on the end-product was not given, it was up to the students to decide level of ambition in terms of programming language, way-of-working, end UI vs back-end logic etc. The objective for the end interview, for the project delivery, was however given:

"During the second interview, we would need you to talk us through the problem, what challenges did you encounter, how did you go about writing the implementation, what are the main features you think make your game interesting and how can it be expanded upon in the next iteration. We also want you to demo the code and show us how the game works."

## Problem statement (my own interpretation)
The client wants a web-based tool for playing Rock, Paper, Scissors vs a randomizing computer - and possibly also for playing one-on-one between two players. It should keep count of all the rounds played and what the score currenty is. The solution should be intuitive and easy to use, and the back-end code should be qualitative, tested and easy to maintain.

## User stories fullfilled by this application

#### START A NEW GAME
````
As a user
In order to initiate a new game
I would like to be able to start a new game by clicking a "New Game" button
````
````
As a user
In order to initiate a first round in a new game
I would like to be able to see selection buttons for my draw: "Rock", "Paper" or "Scissors"
````
#### MAKE YOUR DRAW
````
As a user
In order to make a draw
I would like to be able to click on either "Rock", "Paper" or "Scissors" selection  button for each Round
````
#### GAME VS COMP: GET RESPONSE FROM COMPUTOR
````
As a user
In order get a counter draw from the computor
I would like to get an instant response to my draw from the computor - after my draw is done
````
````
As a user
In order to know who won the last round
I would like to get an instant message - after computor draw - who won the round
````
````
As a user
In order to continue playing after the computor counter draw,
I would like to get an updated score count, and be able to play again
````

#### ONE-ONE-ONE GAME: GET RESPONSE FROM SECOND DRAW
````
As a user
After Player 1 has made his/her draw, in order to continue the round of the game, 
I would like to make it possible for Player 2 to play his/her draw without displaying the draw from Player 1
````
````
As a user
In order to know who won the last round
I would like to get an instant message - after draw from Player 2 - who won the round
````
````
As a user
In order to continue playing after the winner has been shown,
I would like to get an updated score count and a message stating who's turn it is
````

#### END GAME, AND START NEW
````
As a user
In order to start new game after one has finished
I would like it so that after someone has won, the score is reset and the Rounds start again
````
````
As a user
In order to reset and start a new game 
I would like it so that when I press "New game" button the score is reset and a new game starts
````
## How to run the Unit and Feature tests

### Prerequisites
You will need to have Node.js and NPM installed to run the tests which you can find [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). 
Here is what you need to do in order to install and set up the [NPM e2e Training Wheels framework](https://www.npmjs.com/package/e2e_training_wheels):

In the project folder, run the following command in your terminal:
```
$ npm i e2e_training_wheels --save-dev
```

Once the package is installed, run the following script in your terminal:
```
$ node ./node_modules/e2e_training_wheels/dist/install.js
```
And run the following command in the terminal:
```
$ npm link
```

Setup should now be done!

### How to run tests

Feature tests:
```
$ npm run features
```
Unit tests:
```
$ npm run specs
```
Both feature and unit tests: 
```
npm test
```

## Deployed with [Netlify](https://www.netlify.com/)
Check out the deployed site [here](https://leiter007-rock-paper-scissors.netlify.com/).

## Built with
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |
[Tailwind](https://tailwindcss.com/docs/what-is-tailwind/)

## Unit and Feature tested with
[NPM e2e Training Wheels](https://www.npmjs.com/package/e2e_training_wheels)

## Designed and developed by
**Felix Bonnier** - [leiter007](https://github.com/leiter007)

## Acknowledgments
* Code inspiration for scorecount using SessionStorage - [<i>PaperRockScissors</i>](https://github.com/raptorf1/PaperRockScissors) by [**raptorf1**](https://github.com/raptorf1)
* Code inspiration for class function in Round.js file - [<i>rps_trial</i>](https://github.com/kianaditya/rps-trial) by [**kianaditya**](https://github.com/kianaditya)
* Code inspiration for One-on-One player to store draws in an array - [<i>StackOverflow</i>](https://stackoverflow.com/questions/46920064/html-javascript-two-person-rock-paper-scissors-game)
* Inspo for test instructions  - [<i>rock_paper_scissors</i>](https://github.com/zanenkn/rock_paper_scissors) by [**Zanenk**](https://github.com/zanenkn)
  
  

