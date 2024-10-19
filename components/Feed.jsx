'use client'

import { useState } from "react"

const Feed = () => {
  const [searchText, setSearchText] = useState('')

  const handleSearchChange = (e) =>{
    
  }
  return (
    <section className="feed">
    <form className="relative w-full flex-center">
      <input
        type="text" placeholder="Search tag or username for prompts" value={searchText} onChange={handleSearchChange}
        required className="search_input peer"
      />
    </form>      
    </section>
  )
}

export default Feed
