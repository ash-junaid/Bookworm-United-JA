# The Bookworm Society - now powered by Stripe

Find your next adventure at The Bookworm Society. Whether you are hunting for a dusty classic, the latest modern masterpiece, or a self-published indie treasure, our shelves are stocked just for you.
We believe buying books should be as relaxing as reading them. Simply choose a book from the catalogue, breeze through our secure Stripe checkout, and let us handle the legwork. Your delivery will arrive at your doorstep in 2–3 business days - just enough time to brew that fresh cup of tea.

### Project

This project showcases a demo app for Stripe Payments using Node.js. It focuses on the use of a checkout page with the Payment Intents API.

### Key Features & Setup

* **Language:** Built on Node.js using the Express framework for the server.
* **Flow:** Implements the recommended Stripe workflow: calculating the order amount and confirming the payment.

### Installation

Run the following command in the project root to install the required dependencies:

```bash
npm install
```
Install the Stripe library

```bash
npm install stripe --save
```
### Configuration

Before running, ensure you replace the placeholder API keys with your own Stripe test credentials.
Your account's unique keys can be found under Settings > Developers > Manage API Keys:

1.  **Secret Key:** Update the key in `app.js`.
2.  **Publishable Key:** Update the key in `views/checkout.hbs`.

### How to Run

Start the application by running:

```bash
node app.js
```

Then navigate to `http://localhost:3000` in your browser to run the app.
