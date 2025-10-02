import {User} from '../../app/lib/models'
import {ConnectToDB} from '../../app/lib/utils'
import {Product} from '../../app/lib/models'



export const fetchUser = async (q,page) => {
  const regex = new RegExp(q, "i");

const ITEM_PER_PAGE = 2;

    try{
     await ConnectToDB()
     const count = await User.find({username: {$regex: regex}}).countDocuments();
     const users = await User.find({username: {$regex: regex}}).limit(ITEM_PER_PAGE).skip((page-1)*ITEM_PER_PAGE);
     console.log(count,users)
     return {count,users}
    }catch(err){
        console.log(err)
      throw new Error(`Failed to fetch users: ${err.message}`);

    }
}


export const fetchProduct = async (q,page) => {
  const regex = new RegExp(q, "i");

const ITEM_PER_PAGE = 2;

    try{
     await ConnectToDB()
     const count = await Product.find({title: {$regex: regex}}).countDocuments();
     const products = await Product.find({title: {$regex: regex}}).limit(ITEM_PER_PAGE).skip((page-1)*ITEM_PER_PAGE);
     console.log(count,products)
     return {count,products}
    }catch(err){
        console.log(err)
      throw new Error(`Failed to fetch products: ${err.message}`);

    }
}