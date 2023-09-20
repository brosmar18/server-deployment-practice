# LAB - Class 01

## Project: Server Deployment Practice

### Author: Bryan O. Garduno Gonzalez

### Problem Domain  

API server where we write some middleware and practice deployment. 

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/brosmar18/server-deployment-practice/actions) 
- Dev [back-end server url](https://lab01-practice.onrender.com) (when applicable)
- Main [back-end server url](https://lab01-dev-main-practice.onrender.com) (when applicable)


### Collaborators

### Setup

#### `.env` requirements (where applicable)

i.e. not necessary for this lab, will come later. 


#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Deploy as dev branch once ci/cd works!


#### Tests

<!-- Fill this in as you see fit -->

- How do you run tests?

    You run tests by running the command `npm test`. 
- Any tests of note?

    A series of unit tests were conducted using the `jest` framework and `supertest`. These tests are defined in the `server.test.js` file and target various aspects of the server defined in `server.js`. 
    
    Three Key tests were conducted: 

    1. A test to check if the server handles the root path correctly (`GET /`). The expected status code is `200`, and the text in the response should match 'This is a log!'.
    2. A test to validate the server's behavior when an invalid request is made (`GET /foo`). In this case, the expected status code is `404`, indicating that the resource was not found.
    3. A test for error handling when a simulated bad request is made (`GET /bad`). The server is expected to return a `500` status code and indicate that the error occurred on the `/bad` route.

    These tests ensure that the server responds as expected to valid requests, handles invalid routes gracefully, and has a mechanism to report errors. 

- Describe any tests that you did not complete, skipped, etc

    All tests were completed. 

#### UML

![Lab-1 UML](assets/lab-01-uml.png)