import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Search = () => {
    const [loading,setLoading]=useState(true)
    //extracting redux store values
    const btn_val=useSelector((state)=> state.navBtn.value)
    const search=btn_val.searchVal

    //contructing URL
    const API_KEY='22413d0c40557a8f2fff693353b86b5f'
    const hash='577255e0396c8e63415bf55dc4d2fbf0'
    const [Char, setChar]=useState([])
    const url=`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=${API_KEY}&hash=${hash}`

    
    useEffect(()=>{
      setLoading(true)
      const fetch = async()=>{
        const res=await axios.get(url)
        if(res){setLoading(false)}
        console.log(res.data.data.results)
        setChar(res.data.data.results)
      }
      fetch();
    },[url,search])
  return (
    <div>
       { loading ? <div className='loading'>Loading...</div>:
      <div className="row_posters">
        {
          Char.map((itr)=>(
            <div className='iterator'>
            <h1>{itr.name}</h1>
            <img className='poster' src={`${itr.thumbnail.path}.jpg` } alt='Not found'/>
            <h2>Description: {itr.description}</h2>
            </div>
          ))
        }
      </div>}
      </div>
  )
}

export default Search
