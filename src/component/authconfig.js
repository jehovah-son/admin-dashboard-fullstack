


// export const authConfig = {
//     providers: [], // Add providers with an empty array for now
//   pages: {
//     signIn: '/login',
//   },
//   callbacks:{
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = auth?.user;
//       const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false; // redirect unauthenticated users
//       }

//       if (isLoggedIn && nextUrl.pathname === "/login") {
//         return Response.redirect(new URL("/dashboard", nextUrl));
//       }

//       return true;
//     },
//   },

// } 


// export const authConfig = {
//   providers: [],

//   pages: {
//     signIn: "/login", // 👈 custom login page
//   },

//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

//       if (isOnDashboard && !isLoggedIn) {
//         // 🚨 Not logged in but trying to access /dashboard/*
//         return false; // ⬅️ NextAuth will redirect to /login
//       }

//       if (isLoggedIn && nextUrl.pathname === "/login") {
//         // 🚨 Already logged in but tries to visit /login
//         return Response.redirect(new URL("/dashboard", nextUrl)); 
//         // ✅ This one can stay, since it's a redirect for logged-in users
//       }

//       return true; // default allow
//     },
//   },
// };