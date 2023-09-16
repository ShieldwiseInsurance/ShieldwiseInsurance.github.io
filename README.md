# Shieldwise Insurance Website

Author: Shieldwise Team  

This repository contains a the Shieldwise website written in HTML5, CSS3, Javascript and Node.js for getting insurance leads and revolutionising insurance coverage for middle-class India. 

## Table of Contents

- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)

## File Structure
```
shieldwise-website/
|-- node_modules/          # Dependencies installed via npm
|-- public/                # Publicly accessible files
|    |-- css/              # CSS stylesheets (not added yet due to no files)
|    |-- js/               # JavaScript files
|    |-- images/           # Image files
|-- views/                 # Views (e.g., HTML templates)
|    |-- demo.ejs/         # Demo template file for pre-testing 
|    |-- index.ejs/        # Main template file containing html for the organic page
|-- server.js              # Main application file
|-- package.json           # Project metadata and dependencies
|-- package-lock.json      # Dependency lock file
|-- README.md              # Project documentation
```
## Installation

To clone this project, ensure that you have the following:

- Node.js and Express installed
- An editor like VSCode

1. Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/ShieldwiseInsurance/ShieldwiseInsurance.github.io.git
   ```
2. Open VSCode and got to Files.
3. Navigate to the cloned repository and select the root folder of the project.
4. Make sure Node.js, Express and necessary dependencies are installed.
5. Run ``` node server.js ``` on the terminal to test the website on a temporary server. 

## Code structure

1. ```server.js``` contains the main javascript file for setting up express and APIs and also, the hub for the backend. This is where the database will be connected, the server is set up, the different html/ejs pages are rendered and also, where the data is stored for the front-end to render. The static data for the front-end is sent to the ```fetch-data.js``` file from here. 
2. ```fetch-data.js``` receives the static-data from the ```server.js``` and then sets it up for rendering to the front-end by sending it to ```index.ejs``` as template data. Each section on the front-end has a separate block of code here. 
3. ```index.ejs``` holds the main html code for the organic page, part of which is extracted from the health insurance organic page of ```policybazaar.com```. It receives data from the back-end and renders the page according to the templates. There are different sections which are made easy to understand through exhaustive commenting. The CSS styling and certain Javascript aspects are taken from PolicyBazaar. Uptil now, a majority of static data, footer and certain widgets and banners are updated on the page and the next order of business would be to complete the data display and setting up analytics/tracking.



