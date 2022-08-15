import NextAuth from "next-auth";
import * as jsonwebtoken from "jsonwebtoken";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  secret: process.env.MC_SECRET_KEY,
  debug: true,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      // Check whether any user was submitted
      // if there was then a user has signed in.
      const isSignIn = user ? true : false;

      // Add user to token on signin in
      if (isSignIn) {
        token.auth_time = Math.floor(Date.now() / 1000);
        token.accessToken = user.user.accessToken;
        token.info = user.user.info;
      }
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      // Check if there is an access token stored on the next-auth token
      if (token.accessToken) {
        session.accessToken = token.accessToken;
        session.info = token.info;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          // Send the patch request to authenticate a user and receive the response
          const response = await fetch(
            `${process.env.API_URL}/authenticate`,
            {
              method: "PATCH",
              body: JSON.stringify({
                username: credentials.username,
                password: credentials.password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          // marshal the response to JSON
          // and check if the user was successfully authenticated
          const resJSON = await response.json();

          if (!resJSON.authenticated) {
            throw new Error("Username or Password is incorrect!");
          }
          const userData = jsonwebtoken.verify(
            resJSON.accessToken,
            process.env.MC_SECRET_KEY
          );

          delete userData.password;
          delete userData.iat;

          // Return the User object that will store the username and access Token
          // OPTIONAL: also has the User ID and info attached, can remove if not needed to save memory.
          return {
            user: {
              username: credentials.username,
              accessToken: resJSON.accessToken,
              userId: resJSON.userID,
              info: userData,
            },
          };
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  pages: {
    error: "/auth",
    signIn: "/auth",
  },
});
