# 57Blocks Front End Test

This repository contains a Proof of Concept (POC) project developed as part of the 57Blocks Front End test. The POC demonstrates the ability to integrate and present data from one of the following APIs:

- Restaurants
- Movies
- Pokemons
- Music

The primary focus of this POC is to showcase front-end development skills, including API integration, state management, component design, and application architecture.

## Project Structure

The project is actively developed on the `develop` branch and adheres to a specific folder structure to maintain organization and scalability. The core of the project is located within the `57blocktest/movies-poc/app` directory, with the following internal structure:

/app

components

/common - Contains small, reusable components composed of UI components.

/ui - Contains atomic components that have a single responsibility and are used across the application.

login - Houses the login page and related functionality.

movies - Serves as the main app layout, encompassing subdirectories for different aspects of the movies application.

/home - The home page, presenting an overview of movies.

/favorites - A page showing the movies marked as favorites by the user.

/items - Dynamic routing to display a detail page for any selected movie.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository and switch to the `develop` branch:
   ```sh
   git clone https://github.com/dbenite2/57blocktest.git
   cd 57blocktest/movies-poc
   git checkout develop
   ````
2. Install dependencies
    ```sh
    npm install
    ```
3. Run the application
    ```sh
    npm run dev
    ```
## Tests

Test can be executed by 
  ```sh
  npm run test
```

## Demo video:

https://github.com/dbenite2/57blockTest/assets/26072056/a5020f3e-89ba-4f27-9464-eea8f2a00d65



