# Deployment Guide
1. Install npm and MySQL on your system.

2. Execute the AsdDataFile.sql file in MySQL to set up the database.

3. Inside a terminal, change directory to ASD_azure_front and run ```npm install``` to install dependencies.

4. Inside the same directory, run ```npm start``` to start the front end.

5. Use an IDE such as Visual Studio Code to run the back end.

# Repository Structure 

The repository consists of two main parts: 
- The frontend built with React.
  
- The backend built with Spring Boot.

Below is the detailed structure of both sections.


## Frontend (React) 

The frontend is located in the src/ folder and contains the following key components:

### Context:

- UserContext.js: Manages user authentication and context (for user and admin roles). 

### Layout:

- Navbar.js: Contains the main navigation for the application, including links to different pages depending on user authentication (Login, Logout, Product, Users, AccessLogs, Orders).

### Pages:

- AccessLogsPage.js: Displays a list of access logs and information associated + filtering.

- CartPage.js: Displays the items added to the cart. 

- HomePage.js: Home page of the application.

- OrdersPage.js: Displays a list of orders and information associated + filtering.

- ProductPage.js: Displays the list of restaurant products and allows filtering. 

- UserPage.js: Shows user-specific details, like the logged-in user's information.

### Products:

- AddProduct.js: Admin interface to add new products.

- EditProduct.js: Admin interface to edit existing products. 

- ViewProduct.js: Allows users to view product details. Users:


### Users:

- AddUser.js: Interface for user registration.

- EditUser.js: Admin interface to edit user information.

- Login.js: User login interface. 

- ViewUser.js: Admin view for user details. 

### Tests:

- App.test.js: Contains automated tests for the frontend, such as verifying product page and login functionality.


## Backend (Spring Boot) 

The backend is located in the src/main/java/com/Restaurant/ASD/ folder and includes the following components:

### Controller:
- AccessLogController.java: Handles API requests for managing access logs.

- ProductController.java: Handles API requests for managing products.

- OrderController.java: Handles API requests for managing orders.

- OrderItemController.java: Handles API requests for managing order items.
  
- UserController.java: Manages user-related requests like login and user data.

### Exception:

- ProductNotFoundAdvice.java and ProductNotFoundException.java: Handle exceptions for product-related errors.

- UserNotFoundAdvice.java and UserNotFoundException.java: Handle exceptions for user-related errors.

### Model:
- AccessLog.java: Entity representing the access log in the system.

- Product.java: Entity representing the product in the system.

- Order.java: Entity representing the order in the system.

- OrderItem.java: Entity representing the order item in the system.

- User.java: Entity representing the user in the system.

### Repository:
- AccessLogRepository.java: Interface for CRUD operations on the AccessLog entity.

- ProductRepository.java: Interface for CRUD operations on the Product entity.

- OrderItemRepository.java: Interface for CRUD operations on the OrderItem entity.

- OrderRepository.java: Interface for CRUD operations on the Order entity.

- UserRepository.java: Interface for CRUD operations on the User entity.

### Main Application:

- AsdApplication.java: The main entry point for the Spring Boot application.
