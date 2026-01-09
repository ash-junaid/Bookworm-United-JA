# Stripe Payments Integration Demo

This project showcases a demo app for Stripe Payments using Node.js. It focuses on the use of a checkout page with Payment Intents API.

# Key Features & Setup:

Language: Built on Node.js using the Express framework for the server 

Flow: Implements the recommended Stripe workflow: calculating the order amount on the backend to prevent tampering, and confirming the payment on the frontend.

Installation: Run npm install in the project root to install the required dependencies 

Configuration: Before running, ensure you replace the placeholder API keys in app.js (Secret Key) and views/checkout.hbs (Publishable Key) with your own Stripe test credentials.

How to Run: Start the application by running node app.js, then navigate to http://localhost:3000 in your browser to view the demo.
