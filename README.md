# First Hapijs Server

## Project Description
Project to explore hapijs servers. Based on "first-express-server".

## Developer
Requires:
* Node v10 or later.
* MongoDB

### How to get started
* Fork repository, clone locally, navigate to repository directory,
* Download all the files with `npm i`,
* To test, run `npm test`. 

### How to use API
* Create your own .env files with the .env.example files provided in the root of the project and the test folder. Enter the correct MongoDB URI. Default port is set to 8080, you may update it to your port of choice.
* Connect to server with `npm run start`.
* Enter `http://localhost:8080` in your browser.
* This API saves one resource to MongoDB: Games. To the our data, click the links provided on the splash page.

The following methods are currently available for the paths listed:

Method | Path
---|---
`GET` |     `/<resources>`
`POST` |    `/<resources>`

## Contributor
[Mariah Adams](https://github.com/MariahAdams)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
