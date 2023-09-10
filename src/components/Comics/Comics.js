import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Comics.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeFn } from '../../ReduxStore/Redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const Comics = () => {

  const [loading,setLoading]=useState(true)

  //extracting the redux store values
  const reduxData=useSelector((state)=> state.navBtn.value)
  //structuring the API URL
    const API_KEY='22413d0c40557a8f2fff693353b86b5f'
    const hash='577255e0396c8e63415bf55dc4d2fbf0'
    const [Char, setChar]=useState([])
    const dispatch=useDispatch();
   let baseUrl='https://gateway.marvel.com:443/v1/public/comics?'
   let modUrl='limit=98&ts=1&apikey='
    let url=`${baseUrl}${modUrl}${API_KEY}&hash=${hash}`

    useEffect(()=>{
        setLoading(true)
      //setting the url based on the selected options from the drop down menu
      if(reduxData.coDate && reduxData.coAsc){
        console.log('url set co')
        modUrl='orderBy=modified&limit=98&ts=1&apikey='
        url=`${baseUrl}${modUrl}${API_KEY}&hash=${hash}`
        
      }
      else if(reduxData.coDate && reduxData.coDsc){
        modUrl='orderBy=-modified&limit=98&ts=1&apikey='
        url=`${baseUrl}${modUrl}${API_KEY}&hash=${hash}`
      }

      //foc date
      if(reduxData.coFocDate && reduxData.coAsc){
        console.log('url set co')
        modUrl='orderBy=focDate&limit=98&ts=1&apikey='
        url=`${baseUrl}${modUrl}${API_KEY}&hash=${hash}`
        
      }
      else if(reduxData.coFocDate && reduxData.coDsc){
        modUrl='orderBy=-focDate&limit=98&ts=1&apikey='
        url=`${baseUrl}${modUrl}${API_KEY}&hash=${hash}`
      }

      //on sale date
      if(reduxData.coOSD && reduxData.coAsc){
        console.log('url set co')
        modUrl='orderBy=onsaleDate&limit=98&ts=1&apikey='
        url=`${baseUrl}${modUrl}${API_KEY}&hash=${hash}`
        
      }
      else if(reduxData.coOSD && reduxData.coDsc){
        modUrl='orderBy=-onsaleDate&limit=98&ts=1&apikey='
        url=`${baseUrl}${modUrl}${API_KEY}&hash=${hash}`
      }

      //issue number
      if(reduxData.coIN && reduxData.coAsc){
        console.log('url set co')
        modUrl='orderBy=issueNumber&limit=98&ts=1&apikey='
        url=`${baseUrl}${modUrl}${API_KEY}&hash=${hash}`
        
      }
      else if(reduxData.coIN && reduxData.coDsc){
        modUrl='orderBy=-issueNumber&limit=98&ts=1&apikey='
        url=`${baseUrl}${modUrl}${API_KEY}&hash=${hash}`
      }

      const fetch = async()=>{
      
        const res=await axios.get(url)
        if(res){
          setLoading(false)
        }
        setChar(res.data.data.results)
      }
      fetch();
    },[modUrl,url,baseUrl,reduxData.coDate,reduxData.coFocDate,reduxData.coOSD,reduxData.coIN,reduxData.coAsc,reduxData.coDsc,dispatch])
    
    //filtering the data inorder to get the comic to display its details in new route
    const sortFn=(id)=>{
      const filteredItems = Char.filter(item => item.id === id);
      dispatch(changeFn({...reduxData,viewData:filteredItems}))
    }
    return (
      
      <div>
       
      <div className="row_posters">
        { 
        loading ? <div className='loading'>Loading...</div>:
          <div>
          {Char.map((itr)=>(
            <Link to="/comics/view">
            <div className='iterator' key={itr.id} onClick={()=>{sortFn(itr.id)}}>
            <h1>{itr.title}</h1>
            <img className='poster'  id={itr.id} src={`${itr.thumbnail.path}.jpg`} alt=''/>
            </div>
            </Link>
          ))}</div>
        }
      </div>
      </div>
    )
}

export default Comics
