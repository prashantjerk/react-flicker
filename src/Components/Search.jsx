import React, { useEffect, useState } from 'react'
import './Search.css'
import './utils.css'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const [search, setSearch] = useState('')

  return (
    <div className='search flex ai-center'>
      <input type="text" value={search} placeholder='Enter a movie' onChange={(e) => setSearch(e.target.value)} />
      <SearchIcon  />
    </div >
  )
}

export default Search