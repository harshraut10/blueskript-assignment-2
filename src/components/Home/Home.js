import React from 'react'

import './Home.css'
import Characters from '../Characters/Characters';
import Comics from '../Comics/Comics';
import Search from '../Search/Search';
import WelcomePage from '../WelcomePage/WelcomePage';

import { useSelector } from 'react-redux/es/hooks/useSelector';

const Home = () => {

  const btn_val=useSelector((state)=> state.navBtn.value)
  let content;
  if(btn_val.comicsBtn)
  {
    content=<Comics/>
  }
  else if(btn_val.charBtn){
    content=<Characters/>
  }
  else if(btn_val.searchBtn){
    content=<Search/>
  }
  else if(btn_val.home){
    content=<WelcomePage/>
  }
   
  return (
    <div className='containerHome'>
      {/* <Characters/>
      <Comics/> */}
      
      {content}

     
    </div>
  )
}

export default Home
