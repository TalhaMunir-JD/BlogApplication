import React, { useEffect, useState } from "react";
import DisplayBlogs from "./DisplayBlogs";
import AddBlogs from "./AddBlogs";
import SearchBlogs from "./SearchBlogs";
import blogsServices from "frontend/blogsapp/src/services/blogs.js";

const BlogsClass = () => {
    
    const [blog, setBlog] = useState([])

    useEffect(()=>{
        console.log('effect')
        blogsServices.getAll()
            .then(response=>{
            setBlog(response.data)
        })
    }, [])
    console.log(blog, blog.length)    

    return(
        <div>
            <div>
                <h3>Blogs here</h3>
            </div>
            <AddBlogs blog={blog} setBlog={setBlog} />
            {console.log(blog)}
            <DisplayBlogs blog={blog}/>
            <SearchBlogs blog={blog} />
        </div>
    )
}

export default BlogsClass;