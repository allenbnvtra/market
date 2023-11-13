import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";

export const authOption = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      // Credential is the UI
      credentials: {},

      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();

          const user = await User.findOne({ email }).select("+password");

          if (!user) {
            throw Error("Wrong Credentials! Please try again.");
          }

          const passwordMatch = await user.correctPassword(
            password,
            user.password
          );

          if (!passwordMatch) {
            throw Error("Wrong Credentials! Please try again.");
          }

          if (user.role !== "admin") {
            throw Error("Unauthorized user");
          }

          user.password = undefined;

          return {
            name: user.name,
            email: user.email,
            role: user.role,
            id: user._id,
          };
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt(params) {
      if (params.user?.role) {
        params.token.role = params.user.role;
        params.token.id = params.user.id;
        params.user.password = undefined;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.password = undefined;
      }
      return session;
    },
  },
  page: {
    signIn: "/",
  },
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
