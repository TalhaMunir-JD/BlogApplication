import React from "react";

const DisplayBlogs = (props) => {
    const Blogs = props.blog
    return(
        <ul>
            {Blogs.map((b, index)=>(
                <li key={index}>
                    {b.title}
                    <ul>
                        <li>{b.author}</li>
                        <li>{b.url}</li>
                        <li>{b.likes}</li>
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default DisplayBlogs;