import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Search = () => {

    const btn_val=useSelector((state)=> state.navBtn.value)
    const search=btn_val.searchVal
    console.log('search value ',search);
    const API_KEY='22413d0c40557a8f2fff693353b86b5f'
    //`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${hash}`
    const hash='577255e0396c8e63415bf55dc4d2fbf0'
    const [Char, setChar]=useState([])
    //const [url,setUrl]=useState(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=${API_KEY}&hash=${hash}`)
    //const test='http://gateway.marvel.com:443/v1/public/characters?limit=40&apikey=22413d0c40557a8f2fff693353b86b5f'
    // let Data
    const url=`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=${API_KEY}&hash=${hash}`

    
    useEffect(()=>{
      //setUrl(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=22413d0c40557a8f2fff693353b86b5f&hash=577255e0396c8e63415bf55dc4d2fbf0`)
      const fetch = async()=>{
        const res=await axios.get(url)
        console.log(res.data.data.results)
        setChar(res.data.data.results)
          // Data=res.data.data.results
        console.log(res)
      }
      fetch();
    },[url,search])
  return (
    <div>
       
      <div className="row_posters">
        {
          Char.map((itr)=>(
            <div className='iterator'>
            <h1>{itr.name}</h1>
            <img className='poster' src={`${itr.thumbnail.path}.jpg` } alt='Not found'/>
            <h2>Description: {itr.description}</h2>
            {/* <h2>Page Count: {itr.pageCount}</h2>
            <h2>ISBN: {itr.isbn}</h2>
            <h2>Issue No. {itr.issueNumber}</h2> */}
            </div>
          ))
        }
      </div>
      </div>
  )
}

export default Search
