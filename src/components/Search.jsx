import React from 'react'
import { MdSearch } from 'react-icons/md'

function Search({handlesearch}) {
    return (
        <div className = 'search'>
            <MdSearch className = 'navbtn search-icon'/>
            <input className = 'searchtext' placeholder = 'Search' onChange = {(e) => handlesearch(e.target.value)}/>
        </div>
    )
}

export default Search
