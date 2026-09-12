# Context API Intro

A small React application that demonstrates how to share user state with the React Context API.

## Features

- Provides user state through `UserContextProvider`
- Updates the user when the **Login** button is clicked
- Displays the user's name, email, and profile image
- Uses React, Vite, and Tailwind CSS

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/sujeethonnappagol/context-API.git
cd context-api-intro
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
src/
├── Components/
│   ├── Intro.jsx
│   ├── Login.jsx
│   └── Profile.jsx
├── Context/
│   ├── UserContext.js
│   └── UserContextProvider.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## How It Works

`UserContextProvider` stores the current user and exposes `user` and `setUser` through React Context. `App.jsx` calls `setUser` when the Login button is clicked, and the child components read the shared user data with `useContext`.

## Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the Vite development server |
| `npm run build`   | Build the app for production      |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run Oxlint                        |

## License

This project is for learning and practice.
