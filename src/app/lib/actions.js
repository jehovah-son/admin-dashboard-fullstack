'use server'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User } from "../lib/models";
import { ConnectToDB } from "../lib/utils";
import bcrypt from "bcrypt";
import { Product } from "../lib/models";

//Post
export const AddUser = async (formData) => {

  // Convert formData to plain object
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData.entries());
  try {
    // connect to DB
    await ConnectToDB();

    // to hash your password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin: isAdmin, // if coming from form checkbox
      isActive: isActive,
    });

    await newUser.save();
  } catch (err) {
    console.error("❌ Error creating user:", err);
    throw new Error("Failed to create user!");
  }

  // ✅ revalidate users page
  revalidatePath("/dashboard/users");

  // ✅ redirect user after success
  redirect("/dashboard/users");
};




// Post Product


export const AddProduct = async (formData) => {
 
  // Convert formData to plain object
  const { title, desc, price, stock, color, size, } =
    Object.fromEntries(formData.entries());
  try {
    // connect to DB
    await ConnectToDB();

    // create a new user
    const newProduct = new Product({
   title, desc, price, stock, color, size, 
    });

    await newProduct.save();
  } catch (err) {
    console.error("❌ Error creating product:", err);
    throw new Error("Failed to create product!");
  }

  // ✅ revalidate users page
  revalidatePath("/dashboard/product");

  // ✅ redirect user after success
  redirect("/dashboard/product");
};

