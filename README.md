# Device App

Device app is a tool to create and manage devices using their properties.

## Clone

Clone the [repo](https://github.com/geekyoperand/devices-frontend) at your local using the link in the github clone option or write this command in your terminal or cmd

```bash
git clone https://github.com/geekyoperand/devices-frontend.git
```

## Installation

Go to the cloned project directory or write

```bash
cd devices-frontend
```

Use the package manager [npm](www.npmjs.com) or [yarn](https://yarnpkg.com/) to install the dependencies.

If using yarn, write:

```bash
yarn install
```

If using npm, write:

```bash
npm install
```

## Setup

Create a new file at the root folder named as

```bash
.env
```

Copy the contents from sample.env and copy it to .env

## Run

To run the project write this in the command line

If using yarn, write:

```bash
yarn start
```

If using npm, write:

```bash
npm start
```

## Test

Tests are added using jest and enzyme

To run test cases run below command in the command line

If using yarn, write:

```bash
yarn test
```

If using npm, write:

```bash
npm test
```

## Code Structure

A typical top-level directory layout

```.
├── __mocks__                       # contains configuration of tests
├── public                          # public assets folder
├── src                             # source folder
      ├── components                # ui components folder
      ├── constants                 # store constants used in the app
      ├── Modals                    # store modals for the app
      ├── pages                     # store screens for the app
      ├── services                  # store api services for the app
      ├── utils                     # stores utility functions used in the app
      ├── App.js
      ├── index.css
      ├── index.js
      ├── reportWebVitals.js
      └── setupTests.js             # file for connecting adapter for tests
├── .gitignore
├── babel.rc                        # stores babel configuration
├── example.env                     # stores environment variables
├── package.json
├── README.md
└── yarn.lock
```
