# LEARN WITH FUN!

Welcome to **LEARN WITH FUN!** – Your ultimate destination for a seamless blend of learning and entertainment. In this comprehensive README, we will delve into the various aspects of our website and provide a detailed guide on how to install and use it effectively.

## Introduction

**LEARN WITH FUN!** is an innovative platform designed to make learning an enjoyable and holistic experience. We have crafted a dynamic environment where you can not only enhance your knowledge but also have a great time doing it. Our website offers a wide array of features and resources to cater to your learning needs and provide you with endless entertainment.

### Technologies Used

We've meticulously built this website using a stack of cutting-edge technologies and dependencies:

- React Vite App
- Tailwind CSS
- Node.js
- Express.js
- MongoDB
- Axios
- Bcrypt
- Cors
- Dotenv
- Jsonwebtoken
- Mailgen
- Mongoose
- Morgan
- Multer
- Nodemailer
- OTP-generator
- Validator
- Nodemon

These technologies seamlessly come together to create a user-friendly and feature-rich experience.

## Installation

Let's get you started with **LEARN WITH FUN!** Follow these steps to install and run the application on your system:

1. **Node.js Installation**: If you haven't already, download and install Node.js from the [official website](https://nodejs.org/).

2. **Clone the Repository**: Use the following command to clone the repository:
    ```
    git clone https://github.com/Rishabh6306/Learn-With-Fun.git
    ```

3. **Install Dependencies**: Open your code editor and navigate to the cloned directory. In two separate terminals, run the following commands:
- In the "Client" directory: `cd Client` and then `npm install`
- In the "Server" directory: `cd Server` and then `npm install`

4. **Environment Variables**: To run **LEARN WITH FUN!**, you'll need to set up certain environment variables in the `.env` files for both the "Client" and "Server" directories. Here's how to obtain and set these values:

   - In the "Client" directory, create a `.env` file with the following content:
     ```
     VITE_REACT_APP_SERVER_PORT=3001
     ```

- In the "Server" directory, create a `.env` file with the following content:
     ```
     PORT=3001
     MONGODB_URI=<Your MongoDB Atlas URI>
     PASSWORD=<Your Google App Password>
     GMAIL_ID=<Your Gmail ID>
     JWT_SECRET_KEY=<Your Secret Key>
     ```

 Ensure that you replace placeholders like `<Your MongoDB Atlas URI>`, `<Your Google App Password>`, `<Your Gmail ID>`, and `<Your Secret Key>` with your actual configuration.

   These environment variables are essential for the proper functioning of the application.

   Here how can you get this .. 
   ## Environment Variables

To run **LEARN WITH FUN!**, you'll need to set up certain environment variables in the `.env` files for both the "Client" and "Server" directories. Here's how to obtain these values:

1. **PORT=3001**: You can choose any available port for your server, but it's commonly set to 3001. Make sure the client and server `.env` files have the same port.

2. **MONGODB_URI=<Your MongoDB Atlas URI>**: To obtain the MongoDB URI, follow these steps:
   - Sign in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a new cluster or use an existing one.
   - In the cluster dashboard, click "Connect."
   - Choose "Connect your application."
   - Copy the provided connection string, which includes placeholders for your username and password.
   - Replace `<Your MongoDB Atlas URI>` in the server `.env` file with this connection string and make sure to add your actual MongoDB Atlas username and password.

3. **PASSWORD=<Your Google App Password>**: If you're using Gmail for sending emails, you'll need to generate an "App Password." Here's how:
   - Go to your Google Account settings.
   - Navigate to "Security" and find the "App passwords" section.
   - Generate a new app password for your application. This password is what you'll use for the `PASSWORD` value in the server `.env` file.

4. **GMAIL_ID=<Your Gmail ID>**: This is simply your Gmail email address that you're using to send emails.

5. **JWT_SECRET_KEY=<Your Secret Key>**: You can choose any secure string as your secret key. Make sure it's a strong and unique value.

Make sure to replace the placeholders `<Your MongoDB Atlas URI>`, `<Your Google App Password>`, `<Your Gmail ID>`, and `<Your Secret Key>` with your actual values in the respective `.env` files.


Now you have successfully set up the environment variables required to run **LEARN WITH FUN!**. Continue with the installation process to launch the application.


5. **Run the Application**:
- In the "Client" directory, run: `npm run dev`
- In the "Server" directory, run: `nodemon index.js`

Ensure that the port and names in both `.env` files match.

## Authentication

**LEARN WITH FUN!** provides a range of authentication options to enhance your experience:

- **Registration**: Visit our [Netlify](https://www.netlify.com/) registration page and click "Register Now" to create an account. You'll receive a confirmation email upon registration.
![Registration](./Screenshots/SignUpPage.png)

- **Login**: Use your registered username and password to log in securely.
![Login](./Screenshots/LoginPage.png)
![PasswprdPage](./Screenshots/PasswordPage.png)

- **Password Recovery**: In case you forget your password, click "Recover Now" to enter the OTP sent to your email and reset your password.
![OtpPage](./Screenshots/OtpPage.png)
![ResetPage](./Screenshots/ResetPage.png)

- **Profile**: Once registered and logged in, you can access your user profile page where you can update and manage your personal information, preferences, and more. It's your one-stop destination for customizing your experience!
![Profile](./Screenshots//Profile.png)

## Pages and Features

Let's explore the various pages and features of **LEARN WITH FUN!**:

### 1. Home Page

The home page acts as the central hub. It provides links to all the pages, descriptions of those pages, and easy access to the "About" page and "Contact Us" form.

![Home Page](./Screenshots/Home1.png)
![Home Page](./Screenshots/Home2.png)
![Home Page](./Screenshots/Home3.png)
![Home Page](./Screenshots/Home4.png)
### 2. Documentation

Discover documentation on HTML, CSS, JavaScript, ReactJS, and Python. While these documents are concise, they are designed for effective learning.

![Documentation](./Screenshots//Documentation.png)


### 3. Quiz

Test your knowledge with our 5-minute quiz. Get immediate feedback on your score, the number of correct answers, and reset the quiz to try again.

![Quiz](./Screenshots/Quiz.png)

#### Features:
- Select from a variety of quiz categories.
- Track your progress with a scorecard.
- Enjoy an engaging and interactive quiz experience.

### 4. Notes

Create, edit, delete, and search for notes. Your notes are securely saved in the database, and you can easily manage them.

![Notes](./Screenshots/Notes.png)

#### Features:
- Organize notes by topic or subject.
- Search notes by keywords.
- Edit and update notes at any time.

### 5. Games

Enjoy four exciting games: Number Guess, Speed Typing, 15Puzzle, and Bubble Pop. Each game offers a unique challenge to keep you engaged.
![MainGames](./Screenshots/MainGame.png)


Here are all types of Games:
![Games1](./Screenshots/Game1.png)
![Games2](./Screenshots/Game2.png)
![Games3](./Screenshots/Game3.png)
![Games4](./Screenshots/Game4.png)

#### Features:
- Compete with friends on leaderboards.
- Improve your cognitive skills and reflexes.
- Have fun while learning.

### 6. Library

Browse our extensive library of books, view titles and descriptions, search by name, and access detailed book pages. You can purchase books with ease.

![Library](./Screenshots/Library.png)

#### Features:
- Find books on various topics.
- Read book descriptions and reviews.
- Access external sources to purchase books.

### 7. Leaderboard

Monitor your progress on the leaderboard, which tracks your quiz scores. The leaderboard data is saved locally for quick reference.

![Leaderboard](./Screenshots/LeaderBoard.png)

#### Features:
- View your ranking among other users.
- Compete to achieve the top position.
- Motivate yourself to improve your quiz scores.

### 8. Contact Us

Have questions or feedback? Feel free to reach out to us via email or LinkedIn. We are here to assist you.

![Contact Us](./Screenshots/Contact.png)




#### Features:
- Submit queries, feedback, or collaboration proposals.
- Receive prompt responses and assistance.
- Connect with us for project collaborations.

In addition to these features, our website boasts a user-friendly navigation system, ensuring you have easy access to all the resources you need.



## Contact Us

For any issues, inquiries, or collaboration proposals, please do not hesitate to contact us:

- Email: rishabhsrivastav722@gmail.com
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/rishabh6306/)

You can also submit pull requests to contribute to the project. We appreciate your time and look forward to embarking on this learning journey with you!