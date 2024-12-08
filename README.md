
# Dental Store Management System  

This project is a **Dental Store Management System** built with **React.js**, featuring a CRUD (Create, Read, Update, Delete) functionality. The application utilizes a custom-built **JSON Server API** for managing data dynamically.  

## Project Overview  

The Dental Store is an interactive web application designed to manage dental-related entities, including dentists, dental clinics, and dental laboratories. Users can perform various operations like adding, viewing, editing, searching, and deleting data. The project also includes a shopping cart system for managing dental products.  

---

## Features  

### 1. **Home Page**  
- Displays navigation options to explore different sections of the application.  

### 2. **About Us Page**  
- Provides details about the purpose of the Dental Store.  

### 3. **Contact Us Page**  
- Contains contact information for the Dental Store.  

---

### Core Functionalities  

#### **Dentists Management**  
- **Add Dentists:** Users can register new dentists in the store.  
- **View Dentists:** Display details of each dentist, including their name, specialty, and phone number.  
- **Search Dentists:** Quickly find a dentist using a search bar.  
- **Edit Dentists:** Update dentist details, such as their name, specialty, or phone number.  
- **Delete Dentists:** Remove dentists from the store when they are no longer needed.  

#### **Dental Clinics Management**  
- View a categorized list of dental clinic products.  

#### **Dental Laboratories Management**  
- View a categorized list of dental laboratory products.  

#### **Product Management and Shopping Cart**  
1. **Product Catalog:**  
   - Search for products to add to the cart.  
   - View detailed product information.  

2. **Shopping Cart:**  
   - Add products to the cart.  
   - Update order quantity (maximum of 20 per product).  
   - Remove individual products or clear the entire cart.  
   - Automatically calculate the total price based on order quantities.  

---

## Technologies Used  

- **React.js**: For building the user interface.  
- **Bootstrap 5**: For designing responsive and visually appealing components.  
- **JSON Server**: For simulating a REST API to handle backend operations.  
- **CSS**: For styling the application.  
---

## Installation and Setup  

Follow these steps to run the project locally:  

1. Clone the repository:  
   git clone https://github.com/your-username/dental-store.git
   cd dental-store


2. Install dependencies:  
   npm install


3. Start the JSON Server API:  
   json-server --watch db.json --port 5000

4. Start the React development server:  
   npm start
   

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).  


