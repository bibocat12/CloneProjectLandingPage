# CloneProjectLandingPage
 This is the project cloning the design and layout of the [Product Landing Page](https://product-landing-page.freecodecamp.rocks), with the integration of a backend server serving two APIs. The
project includes tasks for HTML/CSS layout, JavaScript logic, and backend API development.

## Frontend Task
 - Clone the layout and components of the Product Landing Page.
 - Exact content replication is not required, but the page structure, layout, and key components should be implemented.
 - Technologies: `HTML`, `CSS`.

## Backend Server
- Build a backend server using Node.js and Express.
- Implement the following APIs:
  * `GET /hello`: Return the string Hello World.
  * `POST /capitalize`: Accept a string in the request body and return the capitalized version of the string.
## JavaScript Integration
- Add interactive functionality to the cloned webpage:
   * A button that calls the `/hello` API and renders the response on the
page.
   * An input form and button that sends the user-entered string to the
`/capitalize` API and renders the capitalized string response on the page.


## Runing API
 We need to open `cmd` in the `\api\` path then run this command:
```
npm run start
```

The server will run at http://localhost:3000

To call API:
 - `GET /hello`: http://localhost:3000/hello
 - `POST /capitalize`: http://localhost:3000/capitalize

## Frontend
We can open `\api\index.html` in a browser or serve it from another server.
