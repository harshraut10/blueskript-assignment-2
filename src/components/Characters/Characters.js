import React from 'react'
import axios from 'axios';
import './Characters.css'
import { useEffect, useState } from 'react';
const Characters = () => {
    const API_KEY='22413d0c40557a8f2fff693353b86b5f'
    //`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${hash}`
    const hash='577255e0396c8e63415bf55dc4d2fbf0'
    const [Char, setChar]=useState([])
    //const [url,setUrl]=useState(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${hash}`)
    const url=`https://gateway.marvel.com:443/v1/public/characters?limit=98&ts=1&apikey=${API_KEY}&hash=${hash}`
    // let Data
    useEffect(()=>{
      const fetch = async()=>{
        const res=await axios.get(url)
        console.log(res.data.data.results)
        setChar(res.data.data.results)
          // Data=res.data.data.results
        // console.log(res)
      }
      fetch();
    },[url])
    return (
      <div className='containerDisp'>
      
      <div className="row_posters">
        {
          Char.map((itr)=>(
            <div className='iterator'>
            <h1>{itr.name}</h1>
            <img className='poster' src={`${itr.thumbnail.path}.jpg`} alt=''/>
            <h2>Description: {itr.description}</h2>
            <h2>Stories: {itr.stories.available}</h2>
            <h2>Comics: {itr.comics.available}</h2>
            </div>
          ))
        }
      </div>
      </div>
  )
}

export default Characters
