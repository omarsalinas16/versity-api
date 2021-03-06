# versity-api

> Online MOOC backend API

This is a web application built with [Express.js](http://expressjs.com/) 4.15.5 and [Mongoose](http://mongoosejs.com/) 5.0.4. Its purpose is to serve both as the API endpoint an to serve the frontend files in the public route to display the website.

## Instalation

Clone or download the repository:

``` bash
git clone https://github.com/omarsalinas16/versity-api.git
```

This is a [Node.js](http://nodejs.org) application, so first make sure you have Node.js version 8.6 or a later compatible (Last tested on 9.1).

Move to the downloaded directory and install dependencies:

``` bash
cd versity-api
npm i
```

## Running and deployment

``` bash
# Start the server in production mode with:
npm start

# Start the server in development mode with:
npm run dev
```

By default the server will be listening for connections on [http://localhost:3000/](http://localhost:3000/)

To generate documentation run the following, the output will be in `/docs`

``` bash
npm run docs
```

## Built With

* [Node.js](http://nodejs.org) - Dvelopment environment used
* [Express.js](http://expressjs.com/) - Web application framework
* [Mongoose](http://mongoosejs.com/) - MongoDB Modeling and connection
* [Passport](http://www.passportjs.org/) - User authentication

## Authors

* **Omar Salinas** - *Did everything* - [omarsalinas16](https://github.com/omarsalinas)

See also the list of [contributors](https://github.com/omarsalinas16/versity-api/contributors) who participated in this project.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details
