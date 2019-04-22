# Rock Paper Scissors challenge

## Description
This repo contains the work initiated with a challenge on the third week of the [Craft Academy Bootcamp](https://craftacademy.se/english/curriculum/), by April 2019 Cohort.

The challenge was to build a Rock, Paper Scissors game as an individual challenge - during a span of 14 days - as a simulation of a tech interview. The requirements on the end-product was not given, it was up to the students to decide level of ambition in terms of programming language, way-of-working, end UI vs back-end logic etc. The objective for the end interview, for the project delivery, was however given:

"During the second interview, we would need you to talk us through the problem, what challenges did you encounter, how did you go about writing the implementation, what are the main features you think make your game interesting and how can it be expanded upon in the next iteration. We also want you to demo the code and show us how the game works."

## Problem statement (my own interpretation)
The client wants a web-based tool for playing Rock, Paper, Scissors vs a computer - in a game of best out of 3. The solution should be intuitive and easy to use, and the back-end code should be qualitative, sustainable and easy to maintain.

## User stories and acceptance criteria

#### START A NEW GAME
````
As a user
In order to initiate a new game
I would like to be able to start a new "best out of 3" game by clicking a "New Game" button
````
* Create button for new game, which should be the only thing one sees when entering the site

````
As a user
In order to initiate a first round in a new game
I would like to be able to see selection buttons for my draw: "Rock", "Paper" or "Scissors"
````
* Create function for "New game" which should show what Round we are in, and the different Draw alternatives

#### MAKE YOUR DRAW
````
As a user
In order to make a draw
I would like to be able to select "Rock", "Paper" or "Scissors" for each Round
````
* Create function for making the different draws - from the player's perspective
* Set "onClick" function on each button so that each button inserts "Rock", "Paper" or "Scissors" into the Draw

#### GET RESPONSE FROM COMPUTOR
````
As a user
In order get a counter draw from the computor
I would like to get an instant response to my draw from the computor - after my draw is done
````
* Create function that generates a random counter-draw of Rock, Paper or Scissors for the Computor
* Call on this function after submit of the draw 

````
As a user
In order to know who won the last round
I would like to get an instant message after computor draw who won the round
````
* Create IF function setting the different "win/lose" scenarios - connecting to the input from both the "player draw" function, and the "computor draw" function

````
As a user
In order to continue playing after the computor counter draw,
I would like to get an updated "Round" number stating who's turn it is and what Round it is, and the current score
````
* Create array of each round which is saved to localStorage containing 
* Set so that when computor draw has been made, the Round number changes and the user can make a new draw
* Create count function of number of of unique winners in the database
* Create count function of number of rounds in database
* Display the number of rounds and the score in the UI


#### END GAME, AND START NEW
````
As a user
In order to get to the end of the game
I would like to receive a "win" or "lose" message when someone has won two times
````
* Create function that counts the number of a specific winner - activated after each round
* Set trigger so that when two winners are the same, game ends and a winner is displayed

````
As a user
In order to start new game after one has finished
I would like it so that after someone has won, the score is reset and the Rounds start again
````
* After someone has reached two wins, the database is reset and "New game" function is activated

````
As a user
In order to reset and start a new game 
I would like it so that when I press "New game" button the score is reset and a new game starts
````
* "New game" function should clear the database of old rounds


## Deployed site
Check out the deployed site [here]().

## Built with
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Designed and developed by
**Felix Bonnier** - [leiter007](https://github.com/leiter007)

## Acknowledgments

