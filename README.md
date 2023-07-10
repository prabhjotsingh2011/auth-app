# Authentication System with JWT Tokens and Cookies

This project is a robust authentication system built using Next.js, incorporating JWT tokens and cookies for secure user authentication. Here are some of its key features:

## User Registration
- Users can securely register for an account by providing their email address and password.
- Passwords are securely hashed and stored in the database.

## User Login
- Registered users can log in using their email address and password.
- Upon successful login, a JSON Web Token (JWT) is generated and stored in an HTTP-only cookie for secure authentication.

## Protected Routes
- Certain routes or pages are protected and can only be accessed by authenticated users.
- Unauthenticated users are redirected to the login page when trying to access protected routes.

## Authorization
- Different user roles can be implemented to restrict access to certain resources or functionalities based on user permissions.

## JWT Token Refresh
- JWT tokens have an expiration time to ensure security.
- When a token is close to expiration, a refresh token can be used to generate a new token without requiring the user to log in again.

## Secure Token Storage
- JWT tokens are securely stored in HTTP-only cookies, reducing the risk of cross-site scripting (XSS) attacks.
- Tokens are transmitted over HTTPS to ensure secure communication between the client and the server.

## User Logout
- Users can log out of their accounts, invalidating the JWT token stored in the cookie.

## Error Handling
- Proper error handling and feedback messages are implemented to guide users and provide a seamless experience.

Feel free to explore the code and adapt the project to your requirements. Happy coding!

## Installation and Setup
1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` or `yarn install`.
3. Configure your database settings in the `.env` file.
4. Run the development server using `npm run dev` or `yarn dev`.
5. Access the application in your browser at `http://localhost:3000`.

You can also check out the deployed version of this project [here](https://auth-app-fawn.vercel.app/).

For more details on how to use Next.js, refer to the official Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs)

Please note that this project is for learning purposes and may require additional security measures before deploying to a production environment.

If you have any questions or feedback, feel free to reach out. Happy coding!
