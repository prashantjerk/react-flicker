import React, { useEffect, useState } from 'react'
import './Search.css'
import './utils.css'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const [search, setSearch] = useState('')

  const API = 'http://www.omdbapi.com?&apikey=83c91151'

  const getMovie = async (title) => {
    const response = await fetch(`${API}`);
    const data = await response.json();
    console.log(data.Search)
  }

  useEffect(() => {
    getMovie();
  }, [])



  return (
    <div className='search flex ai-center jc-center'>
      <input type="text" value={search} placeholder='Enter a movie' onChange={(e) => setSearch(e.target.value)} />
      <SearchIcon />
    </div >
  )
}

export default Search