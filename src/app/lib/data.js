import {User} from '../../app/lib/models'
import {ConnectToDB} from '../../app/lib/utils'


export const fetchUser = async (q) => {
  const regex = new RegExp(q, "i");
    try{
     await ConnectToDB()
     const users = await User.find({username: {$regex: regex}});
     console.log(users)
     return users
    }catch(err){
        console.log(err)
      throw new Error(`Failed to fetch users: ${err.message}`);

    }
}