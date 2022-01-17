# Project Week Plan - Marwa, Liam, William & Fatima

## The Main Idea

A flashcards app to help bootcampers revise the material from the course:

- Front-end should be made with React hosted on Netlify
- Should use a REST API to serve data to the front-end
  - CRUD operations we need:
    - Read
- Data should be stored in a postgreSQL database hosted on heroku
  - Tables:
    - HTML
    - CSS
    - Vanilla JS
  - Columns:
    - Question ID
    - Question Text
    - Answer

### Sprint 1

#### Morning

- Create low-fidelity wireframe - DONE.
- Brainstorm structure of app and create user-flow diagram - DONE.
- Mobile-first design - DONE.
- Decide on daily schedule - DONE.

#### Afternoon

- Plan out components for front end - DONE.
- Spin up a blank react project and host on netlify ready for continuous deployment - DONE.
- Set up our database on Heroku.
- Populate database with questions and answers.
- Set up environment variables.
- Research how to connect backend to frontend in React.

  - Component Tree:
    - Home Page
    - HTML Page:
      - Flashcard
    - CSS Page:
      - Flashcard
    - JavaScript Page:
      - Flashcard
    - Notes Page:

#### Home Page

- Header:
  - Logo
  - Log In Button
- Body:
  - Intro text
  - HTML/CSS/JS Buttons

#### HTML/CSS/JS Pages

- Header:
  - Logo
  - Log In Button
  - Title
- Body:
  - Navbar
  - Text
  - Flashcard
- Footer:
  - Notes Button

#### Flashcard

- Question Text
- Answer Text (Hidden)
- Question Counter
- Controls (Prev, flip, next)
