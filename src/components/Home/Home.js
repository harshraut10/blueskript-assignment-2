import React from 'react'
import { Route,Routes } from 'react-router-dom';
import './Home.css'
import Characters from '../Characters/Characters';
import Comics from '../Comics/Comics';
import Search from '../Search/Search';
import WelcomePage from '../WelcomePage/WelcomePage';
import { useDispatch } from 'react-redux';
import { changeFn } from '../../ReduxStore/Redux';
import { useEffect } from 'react';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import View from '../View/View';

const Home = () => {
    const dispatch=useDispatch();
    //retrieving the path of the URL
    var path = window.location.pathname;
    // Split the path by '/'
    var pathArray = path.split('/');
    // Get the last element (basename)
    var lastElement = pathArray[pathArray.length - 1];
    console.log("Last Element:", lastElement);

    useEffect(()=>{
      //setting the store values based on the last element of the path
      if(lastElement==='comics'){
        dispatch(changeFn({comicsBtn:true,charBtn:false,home:false,searchBtn:false}))
       }

      else if(lastElement === 'characters'){
        dispatch(changeFn({comicsBtn:false,charBtn:true,home:false,searchBtn:false}))
      }
      else if(lastElement=== 'search'){
        dispatch(changeFn({comicsBtn:false,charBtn:false,home:false,searchBtn:true}))
      }
      else if(lastElement=== null){
        dispatch(changeFn({comicsBtn:false,charBtn:false,home:true,searchBtn:false}))
      }
    },[lastElement,dispatch])

  

  let content;

  //extracting data from the redux store
  const btn_val=useSelector((state)=> state.navBtn.value)

  //setting the content
  if(btn_val.comicsBtn)
  {
    content=<Route path='/comics' element={<Comics/>} />
  }
  else if(btn_val.charBtn){
    content=<Route path='/characters' element={<Characters/>}/>
  }
  else if(btn_val.searchBtn){
    content=<Route path='/search' element={<Search/>}/>
  }
  else if(btn_val.home){
    content=<Route path='/' element={<WelcomePage/>}/>
  }
  else{
    content=<Route path="/comics/view" element={<View/>}/>
  }
   
  return (
    <div className='containerHome'>

      <Routes>
      <Route path="/comics/view" element={<View  />}/>
      <Route path="/characters/view" element={<View  />}/>
       
       {content}
      </Routes>
    </div>
  )
}

export default Home
