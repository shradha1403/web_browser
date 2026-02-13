# web_browser
# Mini Mobile Browser (Web App)

## Overview

This project is a basic mobile browser web application built using HTML, CSS, and JavaScript.

The purpose of this project was to understand how web-based apps handle navigation, rendering, and browser limitations compared to native iOS apps.

It includes:

- URL input field
- Go button
- Back button
- Forward button
- Reload button
- Embedded page rendering using an iframe

---

## How It Works

- The user enters a URL in the input field.
- The app formats the URL (automatically adds `https://` if needed).
- The page is loaded inside an iframe.
- Navigation state is manually tracked using a simple history array.
- Back and Forward buttons update the iframe source based on stored history.

This is not a full browser engine. It is a lightweight simulation to explore how browser-based navigation works.

---

## Key Concepts Explored

- DOM manipulation in JavaScript
- Manual navigation state management
- URL formatting and input handling
- iframe behavior
- Browser security restrictions

---

## Limitations

Some major websites (e.g., Google, YouTube) cannot be loaded because they block iframe embedding for security reasons.

Demo-friendly sites:

- example.com
- httpbin.org/html
- neverssl.com

---

## Running the Project
Open index.html in a browser.

For better behavior, run a local server:

python3 -m http.server 8000

Then visit:

http://localhost:8000
