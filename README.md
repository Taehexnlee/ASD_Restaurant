# Deployment Guide
1. a

2. b

3. c

4. d

5. e

6. f

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

- Navbar.js: Contains the main navigation for the application, including links to different pages depending on user authentication (Login, Logout, Product, Users, AccessLogs).

### Pages:

- AccessLogs.js: Displays a list of access logs and information associated.

- CartPage.js: Displays the items added to the cart. 

- HomePage.js: Home page of the application.

- ProductPage.js: Displays the list of restaurant products and allows filtering. 

- UserPage.js: Shows user-specific details, like the logged-in user's information.

### Products:

- AddProduct.js: Admin interface to add new products.

- AddUser.js: Interface for user registration.

- EditProduct.js: Admin interface to edit existing products. 

- EditUser.js: Admin interface to edit user information.

- Login.js: User login interface. 

- ViewProduct.js: Allows users to view product details. Users:

- ViewUser.js: Admin view for user details. 

### Tests:

- App.test.js: Contains automated tests for the frontend, such as verifying product page and login functionality.


## Backend (Spring Boot) 

The backend is located in the src/main/java/com/Restaurant/ASD/ folder and includes the following components:

### Controller:
- AccessLogController.java: Handles API requests for managing access logs.

- ProductController.java: Handles API requests for managing products.
  
- UserController.java: Manages user-related requests like login and user data.

### Exception:

- ProductNotFoundAdvice.java and ProductNotFoundException.java: Handle exceptions for product-related errors.

- UserNotFoundAdvice.java and UserNotFoundException.java: Handle exceptions for user-related errors.

### Model:
- AccessLog.java: Entity representing the access log in the system.

- Product.java: Entity representing the product in the system.

- User.java: Entity representing the user in the system.

### Repository:
- AccessLogRepository.java: Interface for CRUD operations on the AccessLog entity.

- ProductRepository.java: Interface for CRUD operations on the Product entity.

- UserRepository.java: Interface for CRUD operations on the User entity.

### Main Application:

AsdApplication.java: The main entry point for the Spring Boot application.
