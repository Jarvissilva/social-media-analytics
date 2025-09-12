import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Twitter from "next-auth/providers/twitter";
import dbclient from "@/utils/dbclient";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(dbclient),
  providers: [Google, Facebook, Twitter({ version: "2.0" })],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (!user.email?.endsWith("@gmail.com")) {
        console.log("❌ Sign-in blocked: not a Gmail account");
        return false;
      }

      if (!user.role) {
        user.role = "user";
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token, user }) {
      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});
