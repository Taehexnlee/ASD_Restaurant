drop database ASD; 

create database ASD;

use ASD;

CREATE TABLE user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

TRUNCATE TABLE user;

CREATE TABLE product (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100)
);

TRUNCATE TABLE product;

CREATE TABLE access_log (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    `date` datetime NOT NULL,
    description TEXT,
    CONSTRAINT `fk__access_log__user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
);

TRUNCATE TABLE access_log;

CREATE TABLE `order` (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    `date` datetime NOT NULL,
    `payment_type` VARCHAR(255) NOT NULL,
    CONSTRAINT `fk__order__user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
);

TRUNCATE TABLE `order`;

CREATE TABLE `order_item` (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	`order_id` BIGINT NOT NULL,
	`product_id` BIGINT NOT NULL,
    `customisation` TEXT NOT NULL,
	`quantity` int NOT NULL,
    CONSTRAINT `fk__order_item__order` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE,
	CONSTRAINT `fk__order_item__product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE
);

TRUNCATE TABLE `order_item`;

INSERT INTO user (name, username, email, password) VALUES
('1234', 'Admin', '1234@1234', '1234'),
('John Doe', 'jdoe', 'jdoe@example.com', '1234'),
('Jane Smith', 'jsmith', 'jsmith@example.com', '1234'),
('Alice Johnson', 'alicej', 'alicej@example.com', '1234'),
('Bob Brown', 'bbrown', 'bbrown@example.com', '1234'),
('Charlie Davis', 'cdavis', 'cdavis@example.com', '1234'),
('Daniel Evans', 'devans', 'devans@example.com', '1234'),
('Emma Harris', 'eharris', 'eharris@example.com', '1234'),
('Fiona Green', 'fgreen', 'fgreen@example.com', '1234'),
('George White', 'gwhite', 'gwhite@example.com', '1234'),
('Hannah Clark', 'hclark', 'hclark@example.com', '1234'),
('Ivy Lewis', 'ilewis', 'ilewis@example.com', '1234'),
('Jack Martin', 'jmartin', 'jmartin@example.com', '1234'),
('Kevin Lee', 'klee', 'klee@example.com', '1234'),
('Lily Walker', 'lwalker', 'lwalker@example.com', '1234'),
('Mason King', 'mking', 'mking@example.com', '1234'),
('Nina Hill', 'nhill', 'nhill@example.com', '1234'),
('Oscar Young', 'oyoung', 'oyoung@example.com', '1234'),
('Paula Scott', 'pscott', 'pscott@example.com', '1234'),
('Quincy Adams', 'qadams', 'qadams@example.com', '1234'),
('Rachel Turner', 'rturner', 'rturner@example.com', '1234'),
('Samuel Parker', 'sparker', 'sparker@example.com', '1234'),
('Tina Collins', 'tcollins', 'tcollins@example.com', '1234'),
('Ursula Bell', 'ubell', 'ubell@example.com', '1234'),
('Victor Gray', 'vgray', 'vgray@example.com', '1234'),
('Wendy Price', 'wprice', 'wprice@example.com', '1234'),
('Xander Reed', 'xreed', 'xreed@example.com', '1234'),
('Yvonne Bennett', 'ybennett', 'ybennett@example.com', '1234'),
('Zachary Carter', 'zcarter', 'zcarter@example.com', '1234'),
('Olivia Moore', 'omoore', 'omoore@example.com', '1234'),
('Isabella Allen', 'iallen', 'iallen@example.com', '1234');

INSERT INTO product (name, description, price, category) VALUES
('Garlic Bread', 'Toasted baguette slices with garlic butter and parsley.', 4.99, 'Appetizers'),
('Stuffed Mushrooms', 'Mushrooms stuffed with cheese and herbs, baked to perfection.', 7.99, 'Appetizers'),
('Bruschetta', 'Grilled bread topped with tomatoes, basil, and balsamic glaze.', 6.49, 'Appetizers'),
('Mozzarella Sticks', 'Fried mozzarella cheese sticks served with marinara sauce.', 6.99, 'Appetizers'),
('Chicken Wings', 'Crispy chicken wings with your choice of sauce.', 9.99, 'Appetizers'),
('Deviled Eggs', 'Classic deviled eggs with a dash of paprika.', 5.49, 'Appetizers'),
('Spring Rolls', 'Vegetable spring rolls served with sweet chili sauce.', 5.99, 'Appetizers'),
('Nachos', 'Tortilla chips topped with cheese, jalapenos, and sour cream.', 8.49, 'Appetizers'),
('Shrimp Cocktail', 'Chilled shrimp served with cocktail sauce.', 10.99, 'Appetizers'),
('Caprese Salad', 'Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze.', 7.99, 'Appetizers');

INSERT INTO product (name, description, price, category) VALUES
('Spaghetti Bolognese', 'Classic Italian pasta with a rich beef sauce.', 12.99, 'Main Courses'),
('Grilled Chicken Breast', 'Juicy chicken breast served with steamed vegetables.', 14.99, 'Main Courses'),
('Beef Lasagna', 'Layers of pasta, beef ragu, and cheese.', 13.99, 'Main Courses'),
('Chicken Alfredo Pasta', 'Creamy Alfredo sauce with grilled chicken over fettuccine.', 13.49, 'Main Courses'),
('Salmon Fillet', 'Grilled salmon with lemon butter sauce.', 18.99, 'Main Courses'),
('Steak Frites', 'Grilled steak served with crispy fries.', 19.99, 'Main Courses'),
('Vegetable Stir-Fry', 'Mixed vegetables stir-fried in a savory sauce.', 11.99, 'Main Courses'),
('BBQ Ribs', 'Slow-cooked pork ribs with barbecue sauce.', 18.99, 'Main Courses'),
('Chicken Parmesan', 'Breaded chicken with marinara sauce and mozzarella.', 15.99, 'Main Courses'),
('Lamb Chops', 'Grilled lamb chops with rosemary garlic seasoning.', 22.99, 'Main Courses');

INSERT INTO product (name, description, price, category) VALUES
('Cheesecake', 'Creamy cheesecake with a graham cracker crust.', 5.99, 'Desserts'),
('Chocolate Brownie', 'Rich chocolate brownie served with vanilla ice cream.', 4.99, 'Desserts'),
('Apple Pie', 'Classic apple pie served with whipped cream.', 5.49, 'Desserts'),
('Molten Lava Cake', 'Warm chocolate cake with a gooey center.', 6.99, 'Desserts'),
('Tiramisu', 'Italian dessert with layers of mascarpone and coffee-soaked ladyfingers.', 7.49, 'Desserts'),
('Banoffee Pie', 'Banana and toffee pie with a graham cracker crust.', 6.49, 'Desserts'),
('Panna Cotta', 'Creamy vanilla custard served with berry sauce.', 5.99, 'Desserts'),
('Crème Brûlée', 'Rich custard topped with caramelized sugar.', 7.99, 'Desserts'),
('Fruit Tart', 'Fresh fruit atop a pastry cream-filled tart.', 6.99, 'Desserts'),
('Key Lime Pie', 'Tart and creamy lime filling in a graham cracker crust.', 5.99, 'Desserts');

INSERT INTO product (name, description, price, category) VALUES
('Coca Cola', 'Chilled refreshing cola beverage.', 1.99, 'Drinks'),
('Iced Tea', 'Freshly brewed iced tea with lemon.', 2.49, 'Drinks'),
('Lemonade', 'Homemade lemonade with a tangy twist.', 2.99, 'Drinks'),
('Orange Juice', 'Freshly squeezed orange juice.', 3.49, 'Drinks'),
('Milkshake', 'Thick and creamy milkshake in various flavors.', 4.99, 'Drinks'),
('Espresso', 'Strong and rich shot of espresso.', 2.49, 'Drinks'),
('Cappuccino', 'Espresso with steamed milk and foam.', 3.49, 'Drinks'),
('Smoothie', 'Blend of fresh fruits and yogurt.', 4.99, 'Drinks'),
('Sparkling Water', 'Refreshing carbonated water.', 2.49, 'Drinks'),
('Hot Chocolate', 'Rich and creamy hot chocolate.', 3.49, 'Drinks');

INSERT INTO product (name, description, price, category) VALUES
('Vegetable Stir-Fry', 'Fresh vegetables stir-fried in a savory sauce.', 11.99, 'Vegetarian'),
('Falafel Wrap', 'Falafel wrapped in pita with hummus and vegetables.', 8.99, 'Vegetarian'),
('Veggie Burger', 'Plant-based patty with lettuce, tomato, and vegan sauce.', 11.29, 'Vegetarian'),
('Quinoa Salad', 'Quinoa salad with avocado, tomatoes, and a citrus dressing.', 9.99, 'Vegetarian'),
('Spinach and Ricotta Ravioli', 'Homemade ravioli with spinach and ricotta.', 12.49, 'Vegetarian'),
('Stuffed Bell Peppers', 'Bell peppers stuffed with rice and vegetables.', 10.99, 'Vegetarian'),
('Margherita Pizza', 'Thin-crust pizza with fresh tomatoes and mozzarella.', 10.99, 'Vegetarian'),
('Grilled Veggie Skewers', 'Grilled vegetables on a skewer with balsamic glaze.', 9.49, 'Vegetarian'),
('Vegetable Soup', 'Hearty soup with mixed vegetables and herbs.', 6.99, 'Vegetarian'),
('Eggplant Parmesan', 'Breaded eggplant with marinara and mozzarella.', 13.99, 'Vegetarian');

INSERT INTO product (name, description, price, category) VALUES
('Grilled Lamb Chops', 'Lamb chops grilled with rosemary and garlic.', 22.99, 'Non-Vegetarian'),
('BBQ Chicken Wings', 'Chicken wings with a smoky barbecue glaze.', 9.99, 'Non-Vegetarian'),
('Chicken Tacos', 'Tacos filled with grilled chicken, lettuce, and cheese.', 8.99, 'Non-Vegetarian'),
('Beef Burger', 'Juicy beef burger with lettuce, tomato, and cheese.', 12.49, 'Non-Vegetarian'),
('Pulled Pork Sandwich', 'Slow-cooked pulled pork with barbecue sauce.', 10.99, 'Non-Vegetarian'),
('Roast Beef', 'Tender roast beef served with mashed potatoes.', 17.99, 'Non-Vegetarian'),
('Prawn Curry', 'Spicy curry with prawns and coconut milk.', 14.99, 'Non-Vegetarian'),
('Grilled Chicken Breast', 'Juicy grilled chicken breast with herbs.', 13.99, 'Non-Vegetarian'),
('Chicken Caesar Salad', 'Salad with grilled chicken, romaine, and Caesar dressing.', 11.99, 'Non-Vegetarian'),
('Turkey Sandwich', 'Turkey breast sandwich with cranberry sauce and stuffing.', 9.49, 'Non-Vegetarian');

INSERT INTO product (name, description, price, category) VALUES
('Gluten-Free Margherita Pizza', 'Thin-crust pizza with gluten-free dough, fresh tomatoes, and mozzarella.', 11.99, 'Gluten-Free'),
('Quinoa Salad', 'Quinoa, avocado, and citrus dressing.', 9.99, 'Gluten-Free'),
('Grilled Chicken Breast', 'Grilled chicken breast served with steamed vegetables.', 13.99, 'Gluten-Free'),
('Gluten-Free Pancakes', 'Fluffy pancakes made with gluten-free flour.', 8.99, 'Gluten-Free'),
('Zucchini Noodles', 'Zucchini noodles with pesto sauce.', 10.49, 'Gluten-Free'),
('Gluten-Free Chocolate Cake', 'Rich chocolate cake made with gluten-free ingredients.', 6.49, 'Gluten-Free'),
('Stuffed Peppers', 'Bell peppers stuffed with rice and ground beef.', 10.99, 'Gluten-Free'),
('Rice Paper Spring Rolls', 'Fresh vegetables wrapped in rice paper, served with peanut sauce.', 7.99, 'Gluten-Free'),
('Baked Salmon', 'Baked salmon served with lemon and herbs.', 16.99, 'Gluten-Free'),
('Gluten-Free Brownies', 'Fudgy chocolate brownies made with gluten-free ingredients.', 5.49, 'Gluten-Free');

INSERT INTO `access_log` VALUES 
(1, 1,'2024-09-29 14:30:08','Successful Login'),
(2, 1,'2024-09-30 12:28:58','Successful Login'),
(3, 3,'2024-09-28 13:31:42','Successful Login'),
(4, 3,'2024-09-30 16:35:45','Successful Login'),
(5, 4,'2024-09-20 14:32:41','Successful Login'),
(6, 4,'2024-09-26 15:35:48','Successful Login'),
(7, 5,'2024-09-27 12:19:15','Successful Login'),
(8, 5,'2024-09-27 14:21:38','Successful Login');

INSERT INTO `order` VALUES 
(1, 1, '2024-09-27 12:13:21', 'Method1'),
(2, 1, '2024-09-30 13:24:13', 'Method1'),
(3, 3, '2024-09-29 18:03:31', 'Method2'),
(4, 6, '2024-09-28 14:33:04', 'Method1');

INSERT INTO `order_item` VALUES 
(1,1,1,'None',2),
(2,1,2,'X',1),
(3,2,1,'None',2),
(4,3,1,'None',1),
(5,3,2,'None',1),
(6,3,3,'Y',1),
(7,4,1,'None',1);
