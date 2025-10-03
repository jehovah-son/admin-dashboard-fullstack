"use server";
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
    Object.fromEntries(formData);
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

// 👉 revalidatePath("/dashboard/users") is like telling Next.js:
// “Hey, forget the old data for this page. Go and get the fresh users from the database.”

// ✅ Without revalidatePath: page might show stale/old users list.
// ✅ With revalidatePath: page shows the latest users list right away.


  // ✅ revalidate users page
  revalidatePath("/dashboard/users");
  // ✅ redirect user after success
  redirect("/dashboard/users");
};

// Post Product

export const AddProduct = async (formData) => {
  // Convert formData to plain object
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    // connect to DB
    await ConnectToDB();

    // create a new user
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
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

// Delete Product

export const DeleteProduct = async (formData) => {
  // Convert formData to plain object
  const { id } = Object.fromEntries(formData);
  try {
    // connect to DB
    await ConnectToDB();

    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.error("❌ Error deleting product:", err);
    throw new Error("Failed to delete product!");
  }

  // ✅ revalidate users page
  revalidatePath("/dashboard/product");
};

// Delete User

export const DeleteUser = async (formData) => {
  // Convert formData to plain object
  const { id } = Object.fromEntries(formData);
  try {
    // connect to DB
    await ConnectToDB();

    await User.findByIdAndDelete(id);
  } catch (err) {
    console.error("❌ Error deleting user:", err);
    throw new Error("Failed to delete user!");
  }

// 👉 revalidatePath("/dashboard/users") is like telling Next.js:
// “Hey, forget the old data for this page. Go and get the fresh users from the database.”

// ✅ Without revalidatePath: page might show stale/old users list.
// ✅ With revalidatePath: page shows the latest users list right away.


  // ✅ revalidate users page
  revalidatePath("/dashboard/users");
};





// Update user PUT method

export const UpDateUser = async (formData) => {
  // Convert formData to plain object
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    // connect to DB
    await ConnectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    // check every input if any input is === to an empty string or undefined delete it
    Object
      .keys(updateFields)
      .forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.error("❌ Error update user:", err);
    throw new Error("Failed to update user!");
  }


  // ✅ revalidate users page
  revalidatePath("/dashboard/users");

  // ✅ redirect user after success
  redirect("/dashboard/users");
};


// 👉 revalidatePath("/dashboard/users") is like telling Next.js:
// “Hey, forget the old data for this page. Go and get the fresh users from the database.”

// ✅ Without revalidatePath: page might show stale/old users list.
// ✅ With revalidatePath: page shows the latest users list right away.