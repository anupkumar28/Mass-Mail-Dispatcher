# Mass Mail Dispatcher

**Mass Mail Dispatcher** is a web-based tool for sending bulk emails. It allows users to upload a CSV file containing email addresses, filter valid and invalid email addresses, and dispatch personalized emails to multiple recipients using EmailJS.

## Live Demo
[Mass Mail Dispatcher](https://mass-mail-dispatcherr.netlify.app/)

## Features
- **CSV Upload**: Upload a CSV file containing a list of recipient emails.
- **Email Validation**: Automatically detects valid and invalid emails based on standard email format rules.
- **Bulk Email Sending**: Send customized emails to all valid recipients using EmailJS.
- **Rate-Limiting**: Ensures email sending is spaced out to avoid hitting rate limits (1 second delay between each email).
- **Real-Time Feedback**: Displays counts of valid and invalid email addresses and shows them in separate lists for review.

## Technologies Used
- **HTML5**: Structuring the form and layout of the tool.
- **CSS3**: Styling the page for a modern, user-friendly interface.
- **JavaScript**: Core functionality, file processing, and interaction with EmailJS.
- **EmailJS**: Third-party service to send emails directly from the web app without server-side code.
  
## How to Use
1. Open the [Mass Mail Dispatcher](https://mass-mail-dispatcherr.netlify.app/).
2. Enter the sender's email address and email subject.
3. Upload a CSV file containing the recipient email addresses.
4. Write your message in the provided message box.
5. Click **Send Emails** to start dispatching emails to all valid recipients.

## How it Works
1. The user uploads a CSV file containing email addresses.
2. The app validates the email addresses against a regex pattern to determine if they are valid or invalid.
3. The valid emails are displayed and counted on the page, along with a list of invalid emails.
4. When the **Send Emails** button is clicked, the app uses EmailJS to send the emails with a small delay between each email to avoid rate limits.
5. A notification shows the user that the emails are being sent, and you can monitor the console for real-time status.
