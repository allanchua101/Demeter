# Description
The goal of this repository is to showcase the benefits of utilizing Microfrontends + Microservices architecture in building large scale applications.  

## Abstract

Microservices have recently gained attention and hype from the dev community. However, most of the topics and discussions have focused on building back-end systems with high availability and scalability. The current trend is to write a rich browser single page application that connects on an API gateway. Over time, the front-end layer developed by several teams grows and becomes more difficult to maintain which results to a Frontend Monolith.

To solve the issue, big companies came up with an idea to build a web app that is composed by modules owned by independent teams (Often aligned with the bounded context division in a Microservice Architecture). This approach gives teams an end-to-end control on building features (persistence layer to front-end layer). This approach is called Micro Frontends.

## Application

Demeter is an online shopping application that sells extremely rare items (Differentiator's store).

![Shopping Page](https://github.com/allanchua101/Microfrontends-POC/blob/master/docs/wireframes/Shopping%20Page.png)

### Bounded Contexts

- [Authentication](authentication/README.md) - The context responsible for managing user records and login historizations.
- Products - The context responsible for managing product information.
- Catalog - The context responsible for managing product browsing activities. 
- Cart - The context responsible for managing items that an end-user intends to buy.
- Transactions - The context responsible for managing money-product exchanges.

### Tech Stack

- Vert.x (API Aggregation / Application Gateway)
- Express (Backing APIs)
- ASP.net Core (Backing API)
- Spring MVC (Backing API)
- Apollo / GraphQL 
- VueJS
- PostgreSQL
- SQL Server
- Mongo DB
