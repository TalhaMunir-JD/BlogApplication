//search blogs through titles
import React, { useState } from "react"
import DisplayBlogs from "./DisplayBlogs"

const SearchBlogs = ({ blog }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredPeople, setfilteredPeople] = useState(blog)


    const handlequeryChange = (event) => {
        const query = event.target.value
        setSearchQuery(query)
        const filteredContacts = blog.filter(
            b => b.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setfilteredPeople(filteredContacts)
        //console.log(filteredPeople)
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