# Movie Discovery Web Application

Welcome to the Movie Discovery Web Application! This application allows users to search for movies, view movie details, and save their favorite movies. It consumes data from the TMDB (The Movie Database) API.

## Table of Contents

- Getting Started
  - Prerequisites
  - Installation
- Usage
  - Homepage
  - Movie Search
  - Movie Details
  - Saving Favorite Movies
- API Key
- Error Handling
- Contributing

## Getting Started

### Prerequisites

Before running the Movie Discovery Web Application, you need to have the following prerequisites installed:

- Node.js and npm: Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

Follow these steps to install and run the application:

1 Clone the repository to your local machine:

{git clone https://github.com/your-username/movie-discovery-app.git}

2 Navigate to the project directory:

{cd movie-discovery-app}

3 Install the required dependencies:

{npm install}

4 Start the development server:

{npm start}

5 Open your web browser and visit http://localhost:3000 to access the Movie Discovery Web Application.

## Usage

### Homepage

- Upon accessing the application, you will land on the homepage.
- The top 10 movies are displayed in a grid layout with movie posters, titles, and release dates.
- Clicking on a movie card will take you to the movie details page.

### Movie Search

- To search for movies by title, use the search input at the top of the page.
- Enter a movie title and press Enter or click the search button.
- Search results, including movie posters, titles, and release dates, will be displayed below the search input.
- A loading indicator will be shown while fetching search results.

### Movie Details

- Clicking on a movie card on the homepage or a search result will take you to the movie details page.
- On the movie details page, you will see the movie's title, release date (in UTC), runtime (in minutes), and an overview of the movie.

### Saving Favorite Movies

- You can save your favorite movies by clicking on the heart-shaped "Love Icon" on a movie card.
- Saved movies will be stored in your browser's local storage.
- To view your saved favorite movies, you can implement a "Favorites" feature in the future using local storage.

## API Key

- To fetch movie data from the TMDB API, you need to obtain an API key from TMDB.
- Once you have your API key, replace 'YOUR_TMDB_API_KEY' in the code with your actual TMDB API key.

## Error Handling

- The application includes error handling to display meaningful error messages to users in case of API failures or other issues.
- If you encounter any errors, check the console for detailed error messages and refer to the error handling code in the application for guidance.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1 Fork the repository.
2 Create a new branch for your feature or bug fix: git checkout -b feature/new-feature.
3 Make your changes and commit them: git commit -m "Add new feature".
4 Push to your branch: git push origin feature/new-feature.
5 Create a pull request to the main repository.
