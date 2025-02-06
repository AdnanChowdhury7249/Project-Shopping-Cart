# Shopping Cart App 🛒

Overview

This is a React Shopping Cart Application that allows users to browse products, add them to a cart, update quantities, and proceed to checkout. It utilizes React Router for navigation, localStorage for persistent state management, and Tailwind CSS for styling.

Features

✅ Fetch Products - Uses fetch API to retrieve product data from FakeStore API.✅ Product Details Page - Each product has its own details page, dynamically loaded via useParams.✅ Add to Basket - Users can add items to their cart, and quantities update correctly.✅ Update Cart Items - Adjust quantities or remove products from the basket.✅ Checkout Page - Displays all items in the basket, their total cost, and allows updates.✅ Persistent State - Cart data is stored in localStorage, so the basket remains after page refresh.✅ Styled with Tailwind CSS - Responsive, modern design.✅ React Router for Navigation - Seamless routing between Home, Products, and Checkout pages.✅ Tested with Vitest & React Testing Library - Unit tests ensure functionality.

# Technologies Used

React (Vite) ⚛️ - Fast front-end framework.

React Router - For navigation between pages.

useState & useEffect - Manage component states & side effects.

localStorage - Store cart items persistently.

Tailwind CSS - Modern, responsive UI.

Vitest & React Testing Library - Test-driven development (TDD).

Fetch API - Retrieve product data dynamically.

PropTypes - Validate component props.

Installation & Setup

1️⃣ Clone the repo:
git clone https://github.com/your-username/shopping-cart-app.git
cd shopping-cart-app
2️⃣ Install dependencies:
npm install
3️⃣ Start the development server:
npm run dev
4️⃣ Open in browser:
Navigate to http://localhost:5173/

# Running Tests

To run unit tests:
npm run test

