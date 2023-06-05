# EventTrackerProject

## Description
Full-stack Java Spring project backed by a MySQL database that implements a basic REST API to track caffeine consumption with the ability to perform CRUD on entries.

## Database
- TODO: screenshot of ER diagram, description of entities.

## REST API
- TODO: UPDATE

| HTTP Verb | URI                  | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `/api/tacostands`      |              | Collection of representations of all _book_ resources | **List** all taco stands
| GET       | `/api/tacostands/17`   |              | Representation of _TacoStand_ `17` | **Retrieve** endpoint |
| POST      | `/api/tacostands`      | Representation of a new _TacoStand_ resource | Description of the result of the operation | **Create** endpoint |
| PUT       | `/api/tacostands/17`   | Representation of a new version of _TacoStand_ `17` | | **Replace** endpoint |
| DELETE    | `/api/tacostands/17`   |              | | **Delete** route |

## Technologies Used
- Java
- Spring Boot
- Spring REST
- Spring Data JPA
- SpringToolSuite
- MySQL Workbench
- JUnit

## Lessons Learned
- DrinkController, DrinkService and DrinkServiceImpl contain all the logic for the project thus far. DrinkRepository does not currently have any added methods for the limited MVP functionality. The Controller is annotated with REST services and every method in the class is mapped "api" initially to reduce typo errors and improve readability at the individual method level. DrinkService is autowired into the controller and is used in each method to call the method stubs in DrinkService.java. DrinkServiceImpl contains the methodology to contact the database based on the request.
- CRUD methods include: show all, find individual drink, add drink to database, update drink in database, and remove drink from database. Each method has easy to understand mappings thanks to REST URIs.
- In the controller some HTTP statuses and error handling were added to the mapping. I had trouble with the try/catch and status setting in my create a drink method so I left it commented out for now in order to submit a working product.
- Looking forward to building this out with a frontend on next weeks homework and adding User entity and addtional tables such as food items etc.

## JavaScript/AJAX Front End

### Technologies Used
### Lessons Learned

## Angular Front End

### Technologies Used
### Lessons Learned