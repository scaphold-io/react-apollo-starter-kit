#Scaphold.io's React Apollo boilerplate

Fork this boilerplate code to get started with GraphQL, React, and Apollo.

**Quickstart:**

1) Go to Scaphold.io (https://scaphold.io).

2) Create an account and dataset.

3) Change the URL in the API manager (config.js) in the boilerplate to point to your unique Scaphold.io API URL.

5) Install dependencies: ```npm install```

4) Run with: ```npm start```


**Deployment:**

*Note: For development, you only need to run ```npm start```*

1) Run ```npm run build``` to transpile ES6 code from the src/ directory to JavaScript in the lib/ directory.

2) Set the environment variable ```process.env.NODE_ENV = 'production'``` to let server.js know to run the code in the lib/ directory.
