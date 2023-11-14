// const pay = document.getElementById("payStudent");
// pay.addEventListener("click", ()=>{
    
// });

// document.getElementsByClassName('payStudent').onclick = function () {
//     var options = {
//       key: 'YOUR_RAZORPAY_KEY',
//       amount: this.getAttribute('data-amount'), // amount in the smallest currency unit (e.g., paise for INR)
//       currency: 'INR', // change this based on your currency
//       name: 'Spark Foundation',
//       description: 'Donation',
//       order_id: this.getAttribute('data-orderid'),
//       handler: function (response) {
//         alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
//         // You can handle further actions here, e.g., update the database or redirect to a thank you page.
//       },
//     };
  
//     var rzp = new Razorpay(options);
//     rzp.open();
//   };
//   const express = require('express');
//   const bodyParser = require('body-parser');
//   const Razorpay = require('razorpay');
  
//   const app = express();
//   const port = 3000;
  
//   app.use(bodyParser.json());
  
//   const razorpay = new Razorpay({
//     key_id: 'YOUR_RAZORPAY_KEY',
//     key_secret: 'YOUR_RAZORPAY_SECRET',
//   });
  
//   app.post('/create-order', async (req, res) => {
//     const amount = req.body.amount; // You should validate and sanitize user input here
//     const currency = 'INR'; // Change this based on your currency
  
//     const options = {
//       amount: amount * 100, // amount in the smallest currency unit
//       currency: currency,
//     };
  
//     try {
//       const order = await razorpay.orders.create(options);
//       res.json({ orderId: order.id });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
//   app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
//   });
    