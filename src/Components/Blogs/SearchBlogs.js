//search blogs through titles
import React, { useState } from "react"
import DisplayBlogs from "./DisplayBlogs"

const SearchBlogs = ({ Blogs }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredPeople, setfilteredPeople] = useState(Blogs)


    const handlequeryChange = (event) => {
        const query = event.target.value
        setSearchQuery(query)
        const filteredContacts = Blogs.filter(
            blog=> blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setfilteredPeople(filteredContacts)
        console.log(filteredPeople)
    }



    return(
        <div>
            <div>
                <input type="text" value={searchQuery} onChange={handlequeryChange} />
            </div>
            <div>
                <DisplayBlogs blog={filteredPeople}/>
            </div>
        </div>

    )
}

export default SearchBlogs;