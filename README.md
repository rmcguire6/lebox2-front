# LEITNER BOX Version 2

## Overview

The Leitner box is a tool for using spaced repetition to memorize and remember anything forever.

This app takes a very simple approach.

A first time user inputs a username, and a password to sign up.
After login or sign up the user goes to the Cards page and adds as many new cards as they wish. New cards start at level 1.
When they are done adding new cards they answer that day's cards.
As cards are answered correctly they move up one level and disappear.
If a card is answered incorrectly it moves (back) to level 1 and is shown again until it is answered correctly.

When all cards are correctly remembered the user sees an ending message with congratulations, statistics on how many cards were gotten right the first time, and a reminder to do it again tomorrow.

When returning to the app the user must log in with username and password before going to the card box page.

The Leitner spacing used has 7 levels and 64 days.

- Level 1 everyday
- Level 2 every other day starting on 1st
- Level 3 every 4th day starting on the 2nd
- Level 4 every 4th and 13th day of every 16 days
- Level 5 every 12th day of every 16 days
- Level 6 the 24th and 59th day
- Level 7 the 56th day
- Cards are retired after Level 7

## Features

- The user can create their user settings: their username and password.

- The user can create their new cards which are verified by the user and immediately saved to the database.

- The user can use their cards to memorize by remembering the answer, clicking the Answer button to see the correct answer, and marking Yes or No. If the user answers wrong the card is put into the undone queue.

- When the user answers all current cards correctly the user sees congratulations, statistics on how many cards they got correct the first time, and a reminder to memorize again tomorrow.

### Project Status

- [x] CreateReactApp boilerplate
- [x] TDD develop listing cards component
- [x] TDD develop creating a card component
- [x] TDD develop answering a card actions
- [x] TDD end of session information
- [] TDD user sign up
- [] TDD user log in
- [] TDD user log out
- [] TDD selecting a day's cards
