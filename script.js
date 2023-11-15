function openDonateForm() {
    // Show the dialog when the "Donate" button is clicked
    document.getElementById('donateDialog').showModal();
  }

  function payNow() {
    // Add your payment processing logic here

    // Assuming payment is successful, close the dialog
    alert('Payment successful!');
    document.getElementById('donateDialog').close();
  }

  function closeDonateForm() {
    // Close the dialog when the "Close" button is clicked
    document.getElementById('donateDialog').close();
    }