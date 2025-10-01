import {User} from '../../lib/models'
import {ConnectToDB} from '../../lib/utils'
import { NextResponse } from 'next/server';


// export const fetchUser = async () => {
//     try{
//      await ConnectToDB()
//      const users = await User.find()
//      console.log(users)
//      return users
//     }catch(err){
//         console.log(err)
//       throw new Error(`Failed to fetch users: ${err.message}`);

//     }
// }



export const GET = async () => {
    try {
        // Connect to the database
        await ConnectToDB();

        // Fetch all the posts from the database from posts in model
        // Assuming Post is a Mongoose model for the posts collection
        const posts = await User.find();

        // Return the posts in the response if everything is okay
        return NextResponse.json(posts, { status: 200 });
   
    } catch (error) {
        // Return an error message if something fails
        return NextResponse.json({ error: error.message },
            { status: 500 })
    }
}
