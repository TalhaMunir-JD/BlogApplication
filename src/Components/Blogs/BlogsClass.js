import React, { useState } from "react";
import DisplayBlogs from "./DisplayBlogs";
import AddBlogs from "./AddBlogs";
import SearchBlogs from "./SearchBlogs";

const BlogsClass = () => {
    const Blogs = [
        {
            'title': 'Natural language processing',
            'author': 'Yasir Faheem',
            'url': 'www.url.com',
            'likes': 2
        },
        {
            'title': 'Computer Vision',
            'author': 'Daud Abdullah Asif',
            'url': 'www.url.com',
            'likes': 22
        },
        {
            'title': 'Data structures',
            'author': 'Maajid Maqbool',
            'url': 'www.url.com',
            'likes': 200
        }
    ] 
    
    const [blog, setBlog] = useState(Blogs)

    return(
        <div>
            <div>
                <h3>Blogs here</h3>
            </div>
            <AddBlogs blog={blog} setBlog={setBlog} Blogs={Blogs}/>
            <DisplayBlogs blog={blog}/>
            <SearchBlogs Blogs={Blogs} />
        </div>
    )
}

export default BlogsClass;