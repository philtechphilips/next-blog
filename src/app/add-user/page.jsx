import { addPost, addUser, deletePost } from '@/lib/action'
import React from 'react'

const AddPost = () => {
    return (
        <div>
          <form action={addUser}>
            <input type="text" placeholder="title" name="username"/>
            <input type="text" placeholder="desc" name="email"/>
            <input type="text" placeholder="slug" name="password"/>
            <button>Create</button>
          </form>
    
          <form action={deletePost}>
            <input type="text" placeholder="postId" name="id" />
            <button>Delete</button>
          </form>
        </div>
      )
}

export default AddPost
