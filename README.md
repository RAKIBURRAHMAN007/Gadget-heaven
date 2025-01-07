
# Project Name: Gadget Heaven - A Gadget Shopping Platform

## Purpose:
Gadget Heaven is an online shopping platform designed to provide a seamless experience for users looking to browse and purchase the latest gadgets. The website offers a dynamic and interactive experience with features like real-time cart updates, wishlist management, and product sorting. By offering a user-friendly interface and an efficient shopping experience, Gadget Heaven aims to be a one-stop solution for gadget enthusiasts.

## Live Website Link:
[https://gadgets-heaven.netlify.app/](https://gadgets-heaven.netlify.app/)

## Requirement Document Link:
[https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

## List of React Fundamental Concepts Used in the Project:
1. State Management (useState Hook)
2. Effect Hook (useEffect)
3. Toast Notifications
4. Navigating with useNavigate (React Router)
5. React Helmet

## Key Features:
**1. Show Products by Category:** Products are dynamically displayed based on selected categories.
**2. Dynamic Cart and Wishlist Management:** Real-time updates and easy management of cart and wishlist.
**3. Sort Cart by Price & Total Cost Calculation:** Sort products by price and calculate the total cost dynamically.
**4. Modal Confirmation After Purchase:** A confirmation modal is shown after making a purchase.
**5. Dynamic Button Navigation Styles:** Buttons change their style based on the active route.

## Additional Information:
**I used local storage for handling and managing data**, ensuring that users can keep track of their cart and wishlist even after refreshing the page.

## npm Packages I Have Used:
1. react
2. react-router-dom
3. react-toastify
4. axios
5. react-helmet



Here’s how you can run the **Gadget Heaven** project locally:

### How to Run Gadget Heaven Locally

1. **Clone the Repository:**
   First, clone the project repository to your local machine using:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory:**
   Change into the project folder:

   ```bash
   cd GadgetHeaven
   ```

3. **Install Dependencies:**
   Install all necessary dependencies using npm:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**
   If your project has any environment variables (e.g., API keys), create a `.env` file in the root of your project directory and add them.

   Example:
   ```bash
   REACT_APP_API_URL=<your-api-url>
   ```

5. **Start the Development Server:**
   After installing dependencies and setting up environment variables, run the following command to start the local development server:

   ```bash
   npm start
   ```

   The app will be accessible at [http://localhost:3000](http://localhost:3000).

### Additional Information:
- **Local Storage:** The project uses local storage for cart and wishlist management, allowing users to retain data even after refreshing the page.
- **Dynamic Sorting:** Products can be sorted by price, and the total cost is dynamically calculated, so ensure the correct functions are hooked up.
- **Modal Confirmation:** After a purchase, a modal will confirm the transaction. Make sure all modal functionality is integrated.

You should now be able to run the project locally on your machine! Let me know if you encounter any issues.
