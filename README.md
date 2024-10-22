Backend (Spring Boot) The backend is located in the src/main/java/com/Restaurant/ASD/ folder and includes the following components:

Controller:

ProductController.java: Handles API requests for managing products. UserController.java: Manages user-related requests like login and user data. Exception:

ProductNotFoundAdvice.java and ProductNotFoundException.java: Handle exceptions for product-related errors. UserNotFoundAdvice.java and UserNotFoundException.java: Handle exceptions for user-related errors. Model:

Product.java: Entity representing the product in the system. User.java: Entity representing the user in the system. Repository:

ProductRepository.java: Interface for CRUD operations on the Product entity. UserRepository.java: Interface for CRUD operations on the User entity. Main Application:

AsdApplication.java: The main entry point for the Spring Boot application.
