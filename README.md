
# Notes from the Author: 
The project currently meets the minimal functional threshold to display the data. It currently feature:

- WebSocket: via RxStomp with SockJS supplying the factory with the connection 
- Basic Routing; and
- display of Websocket topic data

There's lots of improvements that should be made:

- Some clean-up should be done to remove unused code and configuration (for proxy and protocol upgrade)
- The services could be a lot nicer and only return ready object data to be displayed
- Better use of RxJS would allow this and maybe eliminate some of the length of the code whilst coercing the data
- The data in the market view isn't updating dynamically as the data comes in:
    - The new data can be seen in the console.logs  
- Auxiliary routes could be used to present a flatter layout removing the need for navigation to a new page for the market routes
    - This would allow the details to be drilled into as seen on sports sites like: https://sports.br.betboo.com/pt-br/sports/futebol-4 
- A material design theme and component style would go a long way to making this project look more substantial

Beyond this responsive layout, aria-support, font improvements, lazy-loading, and animations would take it to a nice releasable level 








# Sportsbook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
