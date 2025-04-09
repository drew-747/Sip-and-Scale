# Sip & Scale Documentation

Sip & Scale is a global dinner series connecting students, founders, and innovators. This project is a web application designed to showcase upcoming events, testimonials, and opportunities to join the community.

---

## Table of Contents

- [Sip \& Scale Documentation](#sip--scale-documentation)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Components](#components)
  - [Utilities](#utilities)
  - [Main Application](#main-application)
  - [Error Handling](#error-handling)
  - [Favicon](#favicon)
  - [How to Use](#how-to-use)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [License](#license)

---

## Overview

Sip & Scale is a platform that fosters connections among students, founders, and innovators through casual dinners. The application provides a seamless way to explore events, learn about city leads, and register for upcoming gatherings.

---

## Features

- **Dynamic Components**: Modular React components for a reusable and scalable UI.
- **Event Listings**: Displays upcoming events with details like date, time, and venue.
- **Testimonials**: Showcases success stories from community members.
- **Registration Form**: Allows users to register for events.
- **City Leads**: Highlights passionate leaders driving innovation in their cities.
- **Responsive Design**: Fully responsive layout using TailwindCSS.
- **Loading Animation**: Smooth loading animation for enhanced user experience.

---

## Components

The following components are included in the project:

- **LoadingAnimation:** `components/LoadingAnimation.js`
- **Navbar:** `components/Navbar.js`
- **Hero:** `components/Hero.js`
- **About:** `components/About.js`
- **Cities:** `components/Cities.js`
- **CityLeads:** `components/CityLeads.js`
- **Events:** `components/Events.js`
- **Testimonials:** `components/Testimonials.js`
- **Register:** `components/Register.js`
- **Footer:** `components/Footer.js`

---

## Utilities

- **Data Utility:** `utils/data.js`  
  This utility handles fetching and managing data for the application.

---

## Main Application

- **Entry Point:** `app.js`  
  The main application file that initializes and renders the React components.

---

## Error Handling

The application includes a global error handler to log and manage errors gracefully:

```javascript
window.addEventListener('error', function(e) {
    console.error('Script error:', e);
});
```

---

## Favicon

![Favicon](https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/9838/2995d31d-e964-465d-9b27-d9fcee457d4a.png)

---

## How to Use

1. **Include the necessary scripts and styles in your HTML file**:
   - React, ReactDOM, Babel, TailwindCSS, Font Awesome
   - Custom styles (`styles/global.css`)

2. **Add the following `div` to your HTML body**:
   ```html
   <div id="root"></div>
   ```

3. **Load the components and utilities as `<script>` tags**:
   - Use `type="text/babel"` for JSX-based components.

4. **Run the main application script (`app.js`)**:
   - This initializes the app and renders it into the `#root` div.

---

## Technologies Used

- **Frontend**:
  - React (via CDN)
  - Babel (for JSX transpilation)
  - TailwindCSS (for styling)
  - Font Awesome (for icons)
- **Custom Styles**: `styles/global.css`
- **Hosting**: Static files served via Express.js

---

## Project Structure

```
Sip-and-Scale/
├── components/          # React components for the application
│   ├── LoadingAnimation.js
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Cities.js
│   ├── CityLeads.js
│   ├── Events.js
│   ├── Testimonials.js
│   ├── Register.js
│   ├── Footer.js
├── styles/
│   ├── global.css       # Global styles for the application
├── utils/
│   ├── data.js          # Utility functions for fetching data
├── app.js               # Main React application
├── index.html           # Entry point for the application
├── package.json         # Project metadata and dependencies
├── server.js            # Express server for serving the application
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
