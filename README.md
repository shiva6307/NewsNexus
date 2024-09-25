# NewsNexus
Overview
This project is a responsive news website built using HTML, CSS, and JavaScript. It displays the latest news from various categories, fetched from the NewsAPI. The website includes search functionality, pagination, and category-based news filtering. The design is modern, and the layout is optimized for both desktop and mobile views.

Live Features:
News Categories: General, World, Technology, Entertainment, and Sports.
Search Functionality: Users can search for specific news topics.
Pagination: Navigate through different pages of news articles.
Responsive Design: Optimized for various screen sizes including mobile and desktop.
Styled Navbar: A modern, visually appealing navigation bar with hover effects.
Files
index.html: This is the main HTML file containing the structure of the webpage.
style.css: This file includes all the CSS styling rules for making the website responsive, visually pleasing, and interactive.
script.js: The JavaScript file contains the logic for fetching news from the API, handling category changes, pagination, and search functionality.
Structure
plaintext
Copy code
├── index.html      # HTML structure for the webpage.
├── style.css       # CSS for styling the webpage (responsive design, hover effects, etc.).
└── script.js       # JavaScript for dynamic functionality (API requests, pagination, etc.).
How to Use
Clone the repository: Download or clone the project files to your local machine.

bash
Copy code
git clone <repository-url>
Open in Browser: Open the index.html file in a web browser to view the website.

API Key Configuration:

To make the website fully functional, you need an API key from NewsAPI.
Replace the existing apiKey in script.js with your own API key.
javascript
Copy code
const apiKey = 'YOUR_API_KEY';
Navigate News:

Category Tabs: Click on any category (Home, World, Technology, etc.) to view news from that category.
Search: Enter a keyword in the search bar and click "Search" to view news related to the query.
Pagination: Use the "Previous" and "Next" buttons to navigate between pages.
Features Breakdown
Navigation Bar:

The navigation bar includes clickable links to different categories like World, Technology, Entertainment, etc.
A search bar is also included to allow users to search for news articles by keyword.
The navbar has hover effects where the background color changes when hovering over any menu item.
Hero Section:

The hero section contains a prominent headline with a short description to introduce users to the website.
News Articles Section:

News articles are displayed in a card layout. Each card includes an image, title, description, and a "Read More" button linking to the full article.
Pagination:

Users can navigate through different pages of news articles using "Previous" and "Next" buttons.
Pagination buttons are disabled when users are on the first or last page.
Responsive Design:

The website is fully responsive and adapts to different screen sizes using CSS media queries.
On mobile devices, the navigation menu is hidden and can be accessed using a hamburger icon.
Hover Effects:

Hover effects are applied to the navigation links, buttons, and news cards to enhance the user experience.
Dependencies
NewsAPI: This project fetches real-time news data using the NewsAPI. You will need an API key from NewsAPI.
Internet Connection: As this website fetches news from a third-party API, a stable internet connection is required for the site to function properly.
Known Issues
If the API key is invalid or expired, the website will not fetch news articles.
The website currently supports only a limited number of categories (those provided by NewsAPI).
Future Enhancements
Add a dropdown menu for more categories.
Implement a loader or spinner while fetching data.
Add local storage to save user preferences or last visited category.
Conclusion
This News Website is a lightweight, simple, and responsive web application that fetches and displays news from various categories. It is easily customizable and scalable to add more features such as user authentication, more categories, and personalized news feeds.
