import React, { useState } from 'react'
import './NavBar.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux'
import { changeFn } from '../../ReduxStore/Redux';
import { Link } from 'react-router-dom';
const NavBar = () => {

  const [search,setSearch]=useState('');
  const btn_val=useSelector((state)=> state.navBtn.value)
  const dispatch=useDispatch();

  const searchHandler=()=>{

    dispatch(changeFn({comicsBtn:false,charBtn:false, searchVal:search,home:false,searchBtn:true}))
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
        <Link to='/'>
      <button className={`button ${btn_val.home ? 'clicked' : ''}`}  onClick={()=>{

// {btn_val.comicsBtn ? dispatch(changeFn({comicsBtn:true,charBtn:false})) : dispatch(changeFn({comicsBtn:false,charBtn:true})) }
dispatch(changeFn({comicsBtn:false,charBtn:false,home:true}))


}}>Home</button></Link>


       <Link to='/comics'> <button className={`button ${btn_val.comicsBtn ? 'clicked' : ''}`}  onClick={()=>{
          dispatch(changeFn({comicsBtn:true,charBtn:false,home:false}))
     }}>Comics</button></Link>

        <Link to='/characters'>
        <button className={`button ${btn_val.charBtn ? 'clicked' : ''}`}  onClick={()=>{
      dispatch(changeFn({comicsBtn:false,charBtn:true,home:false}))

     }}>Characters</button></Link>
      <input className='input' type='text' value={search} onChange={inputHandler} placeholder='Search'/>
      <Link to='/search'>
      <button onClick={searchHandler}   className='input-btn' type='submit'>Search</button>
      </Link>
      </span>
      </nav>

     
    </div>
  )
}

export default NavBar
