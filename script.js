// Initialize EmailJS with Public Key
(function () {
  emailjs.init("UMZkVo_ryaTSpDcnW");
})();

// Handle file upload and validation
document.getElementById("csvFile").addEventListener("change", function () {
  var validEmails = []; // Array to store valid emails
  var invalidEmails = []; // Array to store invalid emails

    // Get the selected CSV file from the file input
  var fileInput = document.getElementById("csvFile").files[0];

  // If no file is selected, show an alert
  if (!fileInput) {
    alert("Please select a CSV file.");
    return;
  }

  // Read the contents of the CSV file
  var reader = new FileReader();
  reader.onload = function (event) {
    var csv = event.target.result;
    var lines = csv.split('\n'); // Split file content by lines
        // Loop through each line (email) in the file
    for (var i = 0; i < lines.length; i++) {
      var email = lines[i].trim(); // Remove whitespace
    // Regular expression to validate email format
      var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;

            // Check if the email is valid
      if (emailRegex.test(email)) {
        validEmails.push(email);  // Add valid email to the array
      } else {
        invalidEmails.push(email);  // Add invalid email to the array
      }
    }

    // Display the valid and invalid emails on the page
    document.getElementById("validEmails").innerHTML = validEmails.join("<br><br>");
    document.getElementById("invalidEmails").innerHTML = invalidEmails.join("<br><br>");

        // Update the count of valid and invalid emails
    document.getElementById("validEmailCount").innerText = "(" + validEmails.length + ")";
    document.getElementById("invalidEmailCount").innerText = "(" + invalidEmails.length + ")";
  };
  // Start reading the CSV file as text
  reader.readAsText(fileInput);
});

// Function to send emails when the "Send" button is clicked
function sendEmails() {
  var senderEmail = document.getElementById("senderEmail").value;  // Get sender's email
  var message = document.getElementById("message").value; // Get the message
  var subject = document.getElementById("subject").value;  // Get the subject

  var validEmails = [];
  var invalidEmails = [];

  // Get the selected CSV file from the file input
  var fileInput = document.getElementById("csvFile").files[0];
  
  if (!fileInput) {
    alert("Please select a CSV file.");
    return;
  }

    // Read the contents of the CSV file
  var reader = new FileReader();
  reader.onload = function (event) {
    var csv = event.target.result;
    var lines = csv.split('\n');
    for (var i = 0; i < lines.length; i++) {
      var email = lines[i].trim();
      var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
      if (emailRegex.test(email)) {
        validEmails.push(email);
      } else {
        invalidEmails.push(email);
      }
    }

    // Send emails with a delay between each one to avoid rate limits
    let delay = 1000; // 1 second delay between requests

        // Loop through each valid email and send an email
    validEmails.forEach((email, index) => {
      setTimeout(() => {
        var templateParams = {
          to_name: email,
          from_name: senderEmail,
          message_html: message,
          subject_html: subject
        };

            // Use EmailJS to send the email
        emailjs.send('service_afgglln', 'template_5jf8cxc', templateParams)
          .then(function (response) {
            console.log("Email sent to " + email + " - SUCCESS", response);
          }, function (error) {
            console.error("Email to " + email + " - FAILED", error);
          });
      }, index * delay); // Increment delay for each email
    });

    alert("Emails are being sent. Please check the console for status updates.");
  };

    // Start reading the CSV file as text
  reader.readAsText(fileInput);
}