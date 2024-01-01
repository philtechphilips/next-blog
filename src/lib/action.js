"use server"
import { revalidatePath } from "next/cache";
import { connectToDb } from "./utils";
import { Post, User } from "./models";

export const addPost = async (formData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData);
 
    try {
      connectToDb();
      const newPost = new Post({
        title,
        desc,
        slug,
        userId,
      });
  
      await newPost.save();
      console.log("saved to db");
      revalidatePath("/blog");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };


  export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
  
      await Post.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/blog");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  export const addUser = async (formData) => {
    const { username, email, password } = Object.fromEntries(formData);
  
    try {
      connectToDb();
      const newUser = new User({
        username,
        email,
        password
      });
  
      await newUser.save();
      console.log("saved to db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };