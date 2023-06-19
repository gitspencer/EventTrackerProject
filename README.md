# EventTrackerProject

## Description
Full-stack Java Spring project backed by a MySQL database that implements a basic REST API to track caffeine consumption with the ability to perform CRUD on entries.

## Database
![ER diagram](ERDiagram.png?raw=true)
- Single entity database of drinks, entities to be added later: user & food.

## REST API
| HTTP Verb | URI                  | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `/api/drinks`      |              | Collection of representations of all _drink_ resources | **List** all drinks
| GET       | `/api/drinks/2`   |              | Representation of _Drink_ `2` | **Retrieve** endpoint |
| POST      | `/api/drinks`      | Representation of a new _Drink_ resource | Description of the result of the operation | **Create** endpoint |
| PUT       | `/api/drinks/2`   | Representation of a new version of _Drink_ `2` | | **Replace** endpoint |
| DELETE    | `/api/drinks/2`   |              | | **Delete** route |

### Technologies Used
- Java
- Spring Boot
- Spring REST
- Spring Data JPA
- SpringToolSuite
- MySQL Workbench
- JUnit

### Lessons Learned
- DrinkController, DrinkService and DrinkServiceImpl contain all the logic for the project thus far. DrinkRepository does not currently have any added methods for the limited MVP functionality. The Controller is annotated with REST services and every method in the class is mapped "api" initially to reduce typo errors and improve readability at the individual method level. DrinkService is autowired into the controller and is used in each method to call the method stubs in DrinkService.java. DrinkServiceImpl contains the methodology to contact the database based on the request.
- CRUD methods include: show all, find individual drink, add drink to database, update drink in database, and remove drink from database. Each method has easy to understand mappings thanks to REST URIs.
- In the controller some HTTP statuses and error handling were added to the mapping. I had trouble with the try/catch and status setting in my create a drink method so I left it commented out for now in order to submit a working product.

## JavaScript/AJAX Front End

### Technologies Used
- JavaScript
- AJAX
- HTML
- CSS

### Lessons Learned
- Script.js contains the bulk of the work performed this weekend. Using JavaScript, DOM, and REST APIs to run the website on a single index.html allowing the user to successfully perform all required CRUD functions.
- On opening the page loads a list of all drinks in the database as well as displaying a form to add new drinks at the top of the site. Event listeners are attached to each drink row in the table as well as all buttons to direct you to the appropriate view and action. 
- New and Updated drinks must have a name, as well as valid size and caffeine inputs however the picture url can be left empty. 
- User actions are routed with XMLHttpRequests which can take and relay data in JSON format where neccessary. 
- One of the requirements was a data aggregation function that uses response data to present the data in a different form. To meet this requirement I provided the calculated value of concentration of caffeine per beverage on the detail view. After implementing a user entity I would like to display a graph of a users caffeine consumption over time intervals depending on their selection. 
- The Index.html contains a few container divs to map out the site two which contain form elements for updating and adding drinks and a div to display all the drinks in a table. The newDrinkFormDiv contains all the code to display a functioning form to add a new drink. Above this form is the drinkDetailDiv and accompanying form which are completed with JavaScript when a drink or update button is clicked using event listeners. To keep the website clean I used style.visibility = 'hidden' for other divs when displaying the drinkDetailDiv.
- Used Bootstrap for styling and specific class names recognized in their library for a the desired look. I have noticed I am getting much more comfortable with using new bootstrap classes to manipulate the display of a page into something pleasing to look at, although adding some attributes with JavaScript required a decent bit of trial and error as the syntax is so new. Also incorporated a CSS styesheet to customize image sizes for the site. As the application grows I will use the CSS for more style additions.

## Angular Front End

### Technologies Used
- Angular
- TypeScript
- HTML
- CSS

### Lessons Learned
- Using Angular and TypeScript was much easier than creating HTML elements solely with JavaScript. Given I only have one entity in this project there was no need to use routing via the RouterModule import. Using ngIf logic in my HTML for which tables or divs to display was the more efficent way and allowed me to reuse most of my HTML code from the prior front end built last week.
- I used a number pipe to limit output on my caffeineConcentration to no more than 2 decimals.
- The only item that tripped me up was forgetting to add a name="" inside my HTML drinkDetailDiv inputs which caused my update method to not take the form inputs until this was added.
- DrinkService contains the HTTPClient inside the constructor in order to pass appropriate URLs based on the request type, detailed error messages are included to help with debugging.
- HomeComponent contains the logic for front end CRUD, page reloading method calls and displayHome() based on which HTML elements appropriate to show.





