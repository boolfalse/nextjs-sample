
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {connectToDatabase} from "@utils/db";
import User from "@models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.OAUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({session}) {
            const sessionUser = await User.findOne({email: session.user.email});

            session.user.id = sessionUser._id.toString();

            return session;
        },
        async signIn({profile}) {
            try {
                await connectToDatabase();

                // check if user exists
                const user = await User.findOne({email: profile.email});

                // if not, create user
                if (!user) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(/\s/g, '').toLowerCase(),
                        image: profile.picture,
                    });
                }

                return true;
            } catch (e) {
                console.error(e);
                return false;
            }
        },
    },
});

export {
    handler as GET,
    handler as POST,
};
