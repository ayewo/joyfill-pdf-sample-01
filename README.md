# Joyfill Demo: Fillable PDF Form Data Collection

This demo is based on the [example React](https://github.com/joyfill/examples/tree/main/react) app.

* **Simple Demo** - See `src/demos/simple`. This demo will show you how to use the Joyfill React SDK to render template and update a template. 
* **Templates Workflow Demo** - See `src/demos/templates`. This demo shows how to build a template based workflow using the Joyfill SDK. A template based workflow represents a template that will be filled out repeatedly. This "fill out" action generates a document from the original template.

The template was created from a [fillable PDF form](form-survey.pdf) and is used to create a Joyfill Form.

The demo also shows how to display the (filled out) data collected by the Joyfill Form using a [table](src/demos/templates/pages/TableComponent.js) in React.

Demo page:
![](images/01.png)

Templates page:
![](images/02.png)

Form data page displaying the filled out data in a tabular format:
![](images/03.png)



# Requirements

* Node v18+

# Prerequisites

* Complete [Setup Guide](https://docs.joyfill.io/docs/setup) 
* Complete [React Guide](https://docs.joyfill.io/docs/react)
* Review [Key Terminology](https://docs.joyfill.io/docs/key-terminology)

# Getting Started 

* **Step 1:** Read and Complete the [Joyfill React Guide](https://docs.joyfill.io/docs/react-sdk)
* **Step 2:** Replace `userAccessToken` at the top of file `src/api.js` with a valid Joyfill Access Token to enable the live API. [Learn how to generate a User Access Token here](https://docs.joyfill.io/docs/authentication#user-access-tokens)
* **Step 3:** Run `yarn` to install all dependencies
* **Step 4:** Run `yarn start` in your terminal to run the project

## Project 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


