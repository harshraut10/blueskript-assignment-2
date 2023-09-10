import React from 'react'
import axios from 'axios';
import './Characters.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeFn } from '../../ReduxStore/Redux';
const Characters = () => {

  const [loading,setLoading]=useState(true) //displayed while fetching the data 
  const reduxData=useSelector((state)=> state.navBtn.value)
  const dispatch=useDispatch();
    const API_KEY='22413d0c40557a8f2fff693353b86b5f'
   
    const hash='577255e0396c8e63415bf55dc4d2fbf0'
    const [Char, setChar]=useState([])
   let baseUrl;
   baseUrl='https://gateway.marvel.com:443/v1/public/characters?limit=98&ts=1&apikey=';
    let url=`${baseUrl}${API_KEY}&hash=${hash}`
    useEffect(()=>{
      setLoading(true)
      //setting the url based on the selected options from the drop down menu
      if(reduxData.charBtn)
     { 
      if(reduxData.name && reduxData.asc){
        baseUrl='https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=98&ts=1&apikey='
        url=`${baseUrl}${API_KEY}&hash=${hash}`
      }
      else if(reduxData.name && reduxData.dsc){
          baseUrl='https://gateway.marvel.com:443/v1/public/characters?orderBy=-name&limit=98&ts=1&apikey='
          url=`${baseUrl}${API_KEY}&hash=${hash}`
      }

      else if(reduxData.date && reduxData.asc){
        baseUrl='https://gateway.marvel.com:443/v1/public/characters?orderBy=modified&limit=98&ts=1&apikey='
        url=`${baseUrl}${API_KEY}&hash=${hash}`
    }
    else{
        baseUrl='https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=98&ts=1&apikey='
        url=`${baseUrl}${API_KEY}&hash=${hash}`
    }
  }
    //fetching the data
      const fetch = async()=>{
        const res=await axios.get(url)
        if(res){
          setLoading(false)
        }
        setChar(res.data.data.results)
      }
      fetch();
    },[url,baseUrl,reduxData.name,reduxData.asc,reduxData.dsc,reduxData.date,dispatch])

    //filtering the data inorder to get the character to display its details in new route
    const sortFn=(id)=>{
      const filteredItems = Char.filter(item => item.id === id);
      dispatch(changeFn({...reduxData,viewData:filteredItems}))
    }
    return (
      <div className='containerDisp'>
      
      <div className="row_posters">
        {
          loading ? <div className='loading'>Loading...</div>:
          <div>
          {Char.map((itr)=>(
            <Link to="/characters/view" >
            <div className='iterator' onClick={()=>{sortFn(itr.id)}}>
            <h1>{itr.name}</h1>
           <img  className='poster' src={`${itr.thumbnail.path}.jpg`} alt=''/>
            {/* <h2>Description: {itr.description}</h2>
            <h2>Stories: {itr.stories.available}</h2>
            <h2>Comics: {itr.comics.available}</h2> */}
            </div>
            </Link>
          ))}
          </div>
        }
      </div>
      </div>
  )
}

export default Characters
