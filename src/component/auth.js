// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { authConfig } from "./authconfig";
// import { ConnectToDB } from "../app/lib/utils";
// import { User } from "../app/lib/models";
// import bcrypt from "bcrypt";

// const login = async (credentials) => {
//   try {
//     await ConnectToDB();
//     //login username credential should be the username on our DB
//     const user = await User.findOne({ username: credentials.username });

//     // if there is no user with such username
//     if (!user) throw new Error("wrong username");
//     //  compare the login password with the user password in the DB
//     const isPasswordCorrect = await bcrypt.compare(
//       credentials.password,
//       user.password
//     );

//     if (!isPasswordCorrect) throw new Error("wrong password");

//     // if everthing is okay return user
//     return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to login ");
//   }
// };



// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//           credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials) {
//           try{
//           const user = await login(credentials);
//           return user;
//         } catch (err){
//             console.log(err)
//             return null
//         }
//       },
//     }),
//   ],
// });

