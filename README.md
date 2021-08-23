# Apple-Clone 

Apple.com clone web app that is built using React.js and Node.js 

# Motivation

I wanted to recreate the apple.com website using node for my back end and react for my front end. 

# Description

For the back end, I used Express for my server and MySql for my database. My REST-API is serving the iphone page from the database.

For the front end, I wanted to make the current [apple.com](https://www.apple.com/) better by using a third party API from Google Cloud, specifically youTube, and incorporating it to the website, so anyone can have access to Apple's youTube channel straight from the website. 

# Build Status

Live: [here](https://apple-clone-react.herokuapp.com/) on Heroku.

# Stack

- Node
- Express
- React
- MySql

# APIs

- YouTube from Google Cloud [click](https://console.cloud.google.com/apis/)

# Requirements

- Node
- Nodemon

# Setup

- clone to computer using:

```
git clone https://github.com/birukkebede11/apple-react-function-based.git
```

- run npm install from inside the backEnd directory AND the client directory.

```
cd backEnd
npm install
cd ../client
npm install
```

**_Note: you will need api key from the [google cloud](https://console.cloud.google.com/apis/) and Apple's youTube channel ID._**

Create a .env file in the client directory:

```
REACT_APP_API_KEY=<your_youTube_api_key>
REACT_APP_CHANNEL_ID=<your_channel_id>
```

- From inside backEnd folder type (requires Nodemon) to start server and client:

```
npm run dev
```

You can also just run the server for development:

```
npm run server
```

You can also just run the client for development:

```
npm run client
```
