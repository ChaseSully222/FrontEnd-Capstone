This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technology Stack

* HTML5
* CSS3
* Javascript
* [React](https://reactjs.org/)


## How to initialize csART

1. git clone this repo in your terminal
```shell session
$ git clone git@github.com:ChaseSully222/Frontend-Capstone.git
```

2. Install all libraries and their dependencies
```shell session
$ npm install
```

3. In the root directory, create an api directory and a database.json file in tht directory
```shell session
$ mkdir api
$ cd api
$ touch database.json
```
4. Start your json-server on port 5002
```shell session
$ json-server -p 5002 -w database.json
```

5. The database structure will need to be created as follows in a JSON format in the 
database.json file:
![ERD of csART]

6. Open a new tab in your terminal, cd back to the root directory, and run npm start
```shell session
$ ..
$ npm start
```

7. Open another new tab in your terminal and open the code in your preferred code editor
```shell session
$ code .
```

8. Go to http://localhost:3000/ in your browser to see csART