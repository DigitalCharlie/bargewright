# The Bargewright Inn

A simple solution to log D&D 5e Adventurers League games. 

After creating an account, users can add characters to track as well as adventures those characters have participated in. The app will total their levels gained, gold, and keep a running list of the magic items the character has found.

[Visit the Bargewright Inn](https://bargewright.herokuapp.com/)

## Screenshots

Users can login on the homepage.
![](public/images/Bargewright-login.png)

A user's homepage shows a sortable list of their characters — clicking any of the characters takes them to that character's own page. The quicklinks also let users go directly to either edit the character or log a new adventure.
![](public/images/Bargewright-user-ex.png)

A character's homepage works similarly to a user's homepage.
![](public/images/Bargewright-char-ex.png)

Options to go back are generally at the bottom of the page the user is on — but clicking the logo in the upper left or "my account" will take the user back to their homepage.

## Motivation

This project was created as:
1. A project to turn in for my General Assembly course
2. A learning tool for express and database management
3. An exercise in understanding data relationships in Mongo

## Technology used

The Bargewright Inn was created using express and mongoose, with MongoDB as a database.

## Challenges

While this was created for a project using MongoDB, the data structure probably works better on a relational database. Additionally, since at the start I was unfamiliar with creating relationships between objects I made some choices I would not make again about how to structure the data — especially as I add more models and functionality.

Spending the time to understand how to make a useful ERD and make decisions based on it will help overcome this challenge in future iterations — as opposed to [this really rough ERD](https://github.com/DigitalCharlie/bargewright/blob/main/public/images/Bargewright-erd.png) I made for this project.

## Future improvements

This is version 1.0 of The Bargewright Inn, built as a minimum viable product to start iterating on. Planned improvements currently start with:

1. A way to log DM rewards for users, then apply them to characters. This also creates a need for improved navigation options.
2. A better way to track character levels — currently the information is added in two places (both by adventure and directly on the character)
3. Magic item management so players can add magic items individually, along with their details. This also creates opportunities to remove magic items as they are traded, destroyed, etc.
4. Magic item separation by type so spell scrolls are grouped, potions are grouped and so on.
5. Confirmation dialogues before deleting accounts, characters and logs.
6. Image upload capability so users don't just add links to images.
7. Explore using a relational database instead of MongoDB — and if not, refactoring the structure to change how adventures are stored.
8. Move to either using express sessions or change how JWTs are used. 
9. Redesign the form entry pages so they're a better experience — single vertical column is a bit clunky.

Progress is tracked on [This Trello board](https://trello.com/b/EnUd1pRM/the-bargewright-inn).

## Disclaimer

The Bargewright Inn bears no responsibility for any collisions that may occur as a result of charging headlong into battle after too many pints of Dragondew, Firedrake or Evermead. Do not blame The Bargewright Inn for any squabbles that occur as a result of a DM checking your logs. Despite the record keeping service offered by the Inn, however, the Inn hopes that any DM who does check logs of a player is tossed into the gaping maw of Dendar the night serpent. Unless, of course, that player is rude and disruptive, in which case, may Tyr bless you.