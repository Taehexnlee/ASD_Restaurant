Repository Structure The repository consists of two main parts: the frontend built with React and the backend built with Spring Boot. Below is the detailed structure of both sections.


Frontend (React) The frontend is located in the src/ folder and contains the following key components:

Context:

UserContext.js: Manages user authentication and context (for user and admin roles). Layout:

Navbar.js: Contains the main navigation for the application, including links to different pages depending on user authentication (Login, Logout, Product Page). Pages:

CartPage.js: Displays the items added to the cart. HomePage.js: Home page of the application. ProductPage.js: Displays the list of restaurant products and allows filtering. UserPage.js: Shows user-specific details, like the logged-in user's information. Products:

AddProduct.js: Admin interface to add new products. EditProduct.js: Admin interface to edit existing products. ViewProduct.js: Allows users to view product details. Users:

AddUser.js: Interface for user registration. EditUser.js: Admin interface to edit user information. Login.js: User login interface. ViewUser.js: Admin view for user details. Tests:

App.test.js: Contains automated tests for the frontend, such as verifying product page and login functionality.


Backend (Spring Boot) The backend is located in the src/main/java/com/Restaurant/ASD/ folder and includes the following components:

Controller:

ProductController.java: Handles API requests for managing products. UserController.java: Manages user-related requests like login and user data. Exception:

ProductNotFoundAdvice.java and ProductNotFoundException.java: Handle exceptions for product-related errors. UserNotFoundAdvice.java and UserNotFoundException.java: Handle exceptions for user-related errors. Model:

Product.java: Entity representing the product in the system. User.java: Entity representing the user in the system. Repository:

ProductRepository.java: Interface for CRUD operations on the Product entity. UserRepository.java: Interface for CRUD operations on the User entity. Main Application:

AsdApplication.java: The main entry point for the Spring Boot application.
