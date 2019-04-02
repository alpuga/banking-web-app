# Banking Web App

<img src="https://user-images.githubusercontent.com/37851662/55434776-5e61be80-5566-11e9-9584-e4e96f7e5836.gif" alt="alt text">

Banking app links transactions from multiple institutions.

## Installing

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Built With

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components
- [Plaid](https://plaid.com) for linking bank accounts

## Configuration

You will need to create a keys_dev.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

Additionally, you will need your own [Plaid API](https://plaid.com) keys (`PLAID_CLIENT_ID`, `PLAID_SECRET`, and `PLAID_PUBLIC_KEY`) and create a keys_plaid.js in server config folder & create a plaid-keys.js in a plaid-keys folder in client/src

1. `config/keys_plaid.js`

```
module.exports = {
  plaidClientId: "YOUR_OWN_PLAID_CLIENT_ID",
  plaidSecret: "YOUR_OWN_PLAID_SECRET",
  plaidPublicKey: "YOUR_OWN_PLAID_PUBLIC_ID"
};

```

2. `client/src/plaid-keys/plaid-keys.js`

```
export const plaidClientId = "YOUR_OWN_PLAID_CLIENT_ID";
export const plaidSecret = "YOUR_OWN_PLAID_SECRET";
export const plaidPublicKey = "YOUR_OWN_PLAID_PUBLIC_ID";
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License
