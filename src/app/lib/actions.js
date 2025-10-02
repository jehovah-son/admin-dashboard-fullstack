import {User} from '../lib/models'
import {ConnectToDB} from '../lib/utils'




export const AddUser = async (formData) => {
    'use server'
     // Convert formData to plain object
    const { username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData.entries());
  try {

    // connect to DB
    await ConnectToDB();

    // create a new user
    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin: isAdmin , // if coming from form checkbox
      isActive: isActive ,
    });

    await newUser.save();

    // return { success: true, message: "User created successfully!" };
  } catch (err) {
    console.error("❌ Error creating user:", err);
    throw new Error("Failed to create user!");
  }
}