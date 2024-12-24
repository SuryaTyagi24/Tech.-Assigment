# Tech.-Assigment
# Candidate List Viewer

This project consists of two parts: a backend API created using Node.js and Express, and a frontend built with React to display a list of candidates.

## Project Setup

### Backend (Node.js/Express)
1. Go to the `candidate-list-backend` folder.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the backend server:
    ```bash
    node server.js
    ```
    The backend will run at `http://localhost:5000`.

### Frontend (React)
1. Go to the `candidate-list-frontend` folder.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm start
    ```
    The frontend will run at `http://localhost:3000`.

## Features
- Displays a list of candidates with their name, skills, and years of experience.
- Allows searching for candidates by name or skill.
- Allows sorting candidates by years of experience in ascending/descending order.

## Demo
1. The backend API serves a list of 10 candidates.
2. The frontend fetches this data and displays it in a table.
3. Users can filter candidates by name or skill and sort them by years of experience.
