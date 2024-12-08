# Simple E-Commerce App with Admin Dashboard  

This project is a **Simple E-Commerce Application** built using **React.js** and **Redux**, featuring a dynamic admin dashboard powered by a **JSON Server API**. The app includes user authentication (Login/Sign-up), product management, and a wishlist feature. The project is built and optimized using **Vite** for a fast development and build process.

---

## Project Overview  

The Simple E-Commerce App provides an intuitive interface for users to browse products, view product details, and add items to their wishlist. Admin users, authenticated via the JSON Server API, can access a dashboard to manage users with functionalities like adding, searching, viewing, and deleting users.

---

## Features  

### 1. **Authentication**  
- **Login/Sign-up Forms:**  
  - Secure login and registration process for users.  


### 2. **E-Commerce Functionality**  
- **Product List:**  
  - Users can browse through a list of products available in the store.  
- **Product Details:**  
  - View detailed information about each product, including images, descriptions, and prices.  
- **Wishlist:**  
  - Add products to a wishlist for easy reference later.  

### 3. **Admin Dashboard**  
- Accessible only to authenticated admin users.  
- Admin functionalities include:  
  - Adding new users.  
  - Searching for users.  
  - Viewing all users.  
  - Deleting users.  

---

## Technologies Used  

- **React.js**: For building the user interface.  
- **Redux**: For managing application state and interactions.  
- **Vite**: For a faster development and build process.  
- **JSON Server**: For simulating a REST API backend.  

---

## Installation and Setup  

Follow these steps to run the project locally:  

1. Clone the repository:  

   git clone https://github.com/your-username/simple-ecommerce-app.git
   cd simple-ecommerce-app


2. Install dependencies:  

   npm install


3. Start the JSON Server API:  

   json-server --watch db.json --port 4000

4. Start the Vite development server:  
   npm run dev


5. Open the app in your browser at the link provided in the terminal (e.g., `http://localhost:5173`).  


---

## Usage  

1. **User Role:**  
   - Access the product list.  
   - View detailed product information.  
   - Add products to the wishlist.  

2. **Admin Role:**  
   - Login as an admin (credentials stored in JSON Server API).  
   - Access the dashboard to manage user data.  
   - Perform CRUD operations on user accounts.  

