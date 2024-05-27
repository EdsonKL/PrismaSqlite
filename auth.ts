import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize(credentials) {
        if(credentials.password === "1234"){
            return {id: "1", name: "Edson", email: "teste@gmail.com"}
        }
        return null;
      },
    }),
  ],
});
