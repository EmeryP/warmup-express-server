# warmup-express-server
Practice standing up an express server

## Setup
* Clone this repo to your local machine
* Run `npm i`
* In the root directory from your command line run `nodemon` to start the server
* Open `Postman`, send a `GET` request to `http://localhost:3000` and you can expect to see `hello` returned
* Send a `POST` request to `http://localhost:3000/save` with some JSON object in the body and you can expect the content to be returned to you in JSON format, JSON example is below.

```
{"text": "hello friend"}
```
* Thats it...