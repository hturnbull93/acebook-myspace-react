# AceBook MySpace Front End React App

## [Medium Blog](https://medium.com/acebook-myspace)

## [Trello Wall](https://trello.com/b/ig2kAuJ5/myspace-acebook)

A React frontend app, interacting with the Rails API Backend, [available here](https://github.com/Steven-Klavins/acebook-myspace).

## Setup Instructions

### How to contribute to this project

See [CONTRIBUTING.md](CONTRIBUTING.md)

### Quickstart for a local development server

1. Clone this repository.
2. Clone the [Rails API repo](https://github.com/Steven-Klavins/acebook-myspace).
3. Prepare the Rails API server:

    ```bash
    bundle install
    bin/rails db:setup

    bundle exec rspec # Run the tests to ensure it works
    bin/rails server -p 3001 # Start the server at localhost:3001
    ```

4. Prepare the React Frontend server (from the root dir that repo):

    ```bash
    npm install
    npm test # Run the tests to ensure it works
    npm start
    ```

5. Navigate to <http://localhost:3000.>
6. Enjoy.

## The Team ❤️

- [Angelica Beristain](https://github.com/Angelica137)
- [Faye Carter](https://github.com/FayeCarter)
- [Thomas Harper](https://github.com/tommyrharper)
- [Steve Klavins](https://github.com/Steven-Klavins)
- [Ed Phillips](https://github.com/Edward-Phillips)
- [Harry Turnbull](https://github.com/hturnbull93)