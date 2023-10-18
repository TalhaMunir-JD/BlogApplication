import React, { useState } from "react";
 
const AddBlogs = ({ blog, setBlog, Blogs }) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [likes, setLikes] = useState(0)
    
    const handleAddBlog = (event) => {
        event.preventDefault()
        console.log('add blog button pressed.', title, author, url, likes)

        const newBlog = {
            'title': title,
            'author': author,
            'url': url,
            'likes': likes,
        }
        /* const updatedBlogs = Blogs.concat(newBlog)
        console.log(updatedBlogs) */
        setBlog([...blog, newBlog])
        setTitle('')
        setAuthor('')
        setUrl('')
        setLikes(0)

    }

    const handletitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleauthorChange = (event) => {
        setAuthor(event.target.value)
    }

    const handleurlChange = (event) => {
        //console.log(event.target.value)
        setUrl(event.target.value)
    }

    const handlelikesChange = (event) => {
        //console.log(event.target.value)
        setLikes(event.target.value)
    }

    return(
        <div>
            <div>
                <form onSubmit={handleAddBlog}>
                    <div>
                        Title <input type="text" value={title} onChange={handletitleChange}/>
                    </div>
                    <br></br>
                    <div>
                        Author <input type="text" value={author} onChange={handleauthorChange} />
                    </div>
                    <br></br>
                    <div>
                        Url <input type="url" value={url} onChange={handleurlChange}/>
                    </div>
                    <br></br>
                    <div>
                        Likes <input type="number" value={likes} onChange={handlelikesChange}/>
                    </div>
                    <br></br>
                    <button type="submit">Add Blog</button>
                </form>
            </div>
        </div>
    )
}

export default AddBlogs;