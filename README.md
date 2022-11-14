# EventTrackerProject

## Description
My EventTrackerProject is called Lucid Trainer and allows a user to record dream information. Recording dream details is one of the first
steps in training the subconscious to recognize when dreams are occurring in order to achieve lucidity. Lucid Trainer allows a user to perform CRUD operations on the User account as well as the Dream table(or log).

| CRUD Op. | HTTP Verb | URI                  | Request Body          | Response Body               |
|----------|-----------|----------------------|-----------------------|-----------------------------|
| Read     | GET       | `/api/dreams`        |                       | List of all dreams          |
| Read     | GET       | `/api/dreams/{id}`   |                       | A single dreams             |
| Create   | POST      | `/api/dreams/{id}`   |JSON new dream w/ user | JSON new dream              |
| Update   | PUT       | `/api/dreams/{id}`   |JSON update dream      | JSON updated dream          |
| Delete   | DELETE    | `/api/dreams/{id}`   |                       |                             |
| Read     | GET       | `/api/users`         |                       |                             |
| Read     | GET       | `/api/users/{id}`    |                       |                             |
| Create   | POST      | `/api/users/`        |JSON new user          |JSON new user                |
| Update   | PUT       | `/api/users/{id}`    |JSON update users      |JSON updated users           |
| DELETE   | DELETE    | '/api/user/{id}'     |                       |                             |

## Lessons Learned
This project is helping reinforce the understanding of CRUD operations in a RESTful interface. Through troubleshoot in a few cases, I have been able to remedy any errors received through POSTMAN while attempting to perform an operation. At this stage in the application I am mostly using the Service interface to perform the basic CRUD operations and have yet to implement the more unique methods contained in the Repository. As the project progresses, there will be a need for the Repository, at which point, I am sure more lessons will be learned.
Updated Lessons learned
This week I wanted to focus on displaying forms and data on a single page using Event Listeners and dynamically created page elements. I also wanted to get a better understanding of the way that objects were passed from function to function in our script as well as how JavaScript objects interacted with the form. 



## Technologies Used
Git, Spring Web, Spring Boot, MySql, POSTMAN, Slack, GitHub, terminal   
