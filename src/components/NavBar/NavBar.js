import React, { useState } from 'react'
import './NavBar.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux'
import { changeFn } from '../../ReduxStore/Redux';
const NavBar = () => {

  const [search,setSearch]=useState('');
  const btn_val=useSelector((state)=> state.navBtn.value)
  const dispatch=useDispatch();

  const searchHandler=()=>{

    dispatch(changeFn({comicsBtn:false,charBtn:false, searchVal:search,home:false}))
    setSearch('')
    
  }

  const inputHandler=(event)=>{
    setSearch(event.target.value)
  }


  // const [comics, setComics]=useState(true)
  // const [characters,setCharacters]=useState(false)
  return (
    <div className='containerNav'>
       {/* <button onClick={()=>{dispatch(changeFn({comicsBtn:false,charBtn:true}))}}>Log in</button> */}
      <nav>
      <span>
      <button className={`button ${btn_val.home ? 'clicked' : ''}`}  onClick={()=>{

// {btn_val.comicsBtn ? dispatch(changeFn({comicsBtn:true,charBtn:false})) : dispatch(changeFn({comicsBtn:false,charBtn:true})) }
dispatch(changeFn({comicsBtn:false,charBtn:false,home:true}))


}}>Home</button>
        <button className={`button ${btn_val.comicsBtn ? 'clicked' : ''}`}  onClick={()=>{

          // {btn_val.comicsBtn ? dispatch(changeFn({comicsBtn:true,charBtn:false})) : dispatch(changeFn({comicsBtn:false,charBtn:true})) }
          dispatch(changeFn({comicsBtn:true,charBtn:false,home:false}))
     }}>Comics</button>


        <button className={`button ${btn_val.charBtn ? 'clicked' : ''}`}  onClick={()=>{
      dispatch(changeFn({comicsBtn:false,charBtn:true,home:false}))

     }}>Characters</button>
      <input className='input' type='text' value={search} onChange={inputHandler} placeholder='Search'/>
      <button onClick={searchHandler}   className='input-btn' type='submit'>Search</button>
      </span>
      </nav>

     
    </div>
  )
}

export default NavBar
