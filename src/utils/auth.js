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

});
