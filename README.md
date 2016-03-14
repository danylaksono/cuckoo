# Cuckoo - E2E Javascript Web App

Cuckoo is an idea to combine multiple Javascript libraries into a fully working webmap app capable of performing some basic spatial function, e.g. displaying layers, retrieve spatial data from server, etc

Some components to get this project working:
- MEAN Stack, implemented using [Daftmonk's Angular Fullstack](https://github.com/angular-fullstack/generator-angular-fullstack)
- Tombatossals' [Angular Leaflet](https://github.com/tombatossals/angular-leaflet-directive)
- [ESRI Leaflet](http://esri.github.io/esri-leaflet/)
- [TurfJS](turfjs.org)
- [Leaflet Routing Machine](http://www.liedman.net/leaflet-routing-machine/)
- [D3JS](d3js.org)


## Why Javascript?
Because we *can*


## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`
- [SQLite](https://www.sqlite.org/quickstart.html)

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
