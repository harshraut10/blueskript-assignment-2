import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Comics.css'
import View from '../View/View';
import { Routes,Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeFn } from '../../ReduxStore/Redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const Comics = () => {

  const [loading,setLoading]=useState(true)

  const reduxData=useSelector((state)=> state.navBtn.value)
    const API_KEY='22413d0c40557a8f2fff693353b86b5f'
   //`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${hash}`
    const hash='577255e0396c8e63415bf55dc4d2fbf0'
    const [Char, setChar]=useState([])
    const dispatch=useDispatch();
   // const [url,setUrl]=useState(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${API_KEY}&hash=${hash}`)
   let baseUrl='https://gateway.marvel.com:443/v1/public/comics?'
   let modUrl='limit=98&ts=1&apikey='
    let url=`${baseUrl}${modUrl}${API_KEY}&hash=${hash}`
    // let Data
    useEffect(()=>{
        //mod date
        setLoading(true)
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


      //coIN:false, coAsc:false,coDsc:false
      const fetch = async()=>{
      
        const res=await axios.get(url)
        if(res){
          setLoading(false)
        }
        console.log(res.data.data.results)
        setChar(res.data.data.results)
        
          // Data=res.data.data.results 
        console.log(Char)
      }
      fetch();
    },[modUrl,url,baseUrl,reduxData.coDate,reduxData.coFocDate,reduxData.coOSD,reduxData.coIN,reduxData.coAsc,reduxData.coDsc,dispatch])
    
    //coDate:false, coFocDate:false, coOSD:false, coIN:false, coAsc:false,coDsc:false
    const sortFn=(id)=>{
      const filteredItems = Char.filter(item => item.id === id);
      dispatch(changeFn({...reduxData,viewData:filteredItems}))
       //console.log(filteredItems);

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
            {/* <h2>Description: {itr.description}</h2>
            <h2>Page Count: {itr.pageCount}</h2>
            <h2>ISBN: {itr.isbn}</h2>
            <h2>Issue No. {itr.issueNumber}</h2> */}
            </div>
            </Link>
          ))}</div>
        }
        {/* <Routes>
          <Route path="/comics/view" element={<View  Char={Char}/>}/>
        </Routes> */}
      </div>
      </div>
    )
}

export default Comics
