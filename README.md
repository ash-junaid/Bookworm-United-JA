# Stripe Payments Integration Demo

This project showcases a demo app for Stripe Payments using Node.js. It focuses on the use of a checkout page with the Payment Intents API.

### Key Features & Setup

* **Language:** Built on Node.js using the Express framework for the server.
* **Flow:** Implements the recommended Stripe workflow: calculating the order amount and confirming the payment.

### Installation

Run the following command in the project root to install the required dependencies:

```bash
npm install
```

### Configuration

Before running, ensure you replace the placeholder API keys with your own Stripe test credentials:

1.  **Secret Key:** Update the key in `app.js`.
2.  **Publishable Key:** Update the key in `views/checkout.hbs`.

### How to Run

Start the application by running:

```bash
node app.js
```

Then navigate to `http://localhost:3000` in your browser to view the demo.
