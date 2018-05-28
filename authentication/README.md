# Authentication Bounded Context

The authentication bounded context is the bounded context in charge of managing the authentication and authorization process in the application. It will also provide endpoints for retrieving user master list, user activation, deactivation. A component will also be developed to propagate session and user data to other bounded contexts through the use of event-driven messaging.

## Available Endpoints

- User Registration
- User Authentication
- User Master List
- User Activation / Deactivation
- Data propagation to other bounded contexts.

## Technology Stack

- Node JS
- Express
- PostgreSQL
