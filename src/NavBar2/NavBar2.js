//second nav bar 
import React, { useState } from 'react'
import './NavBar2.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux'
import { changeFn } from '../ReduxStore/Redux';
import { Link } from 'react-router-dom';

const NavBar2 = () => {
  const [search,setSearch]=useState('');
  const reduxData=useSelector((state)=> state.navBtn.value)
  const dispatch=useDispatch();

  //values for dropdown menu from the character section
  const [selectedOption1, setSelectedOption1]=useState('Name')
  const [selectedOption2, setSelectedOption2]=useState('Ascending')

  //values for dropdown menu from the comics section
  const [coSelectedOption1,setCoSelectedOption1]=useState('Date Modified')
  const [coSelectedOption2,setCoSelectedOption2]=useState('Ascending')

  const handleSelectChange1=(e)=>{
    setSelectedOption1(e.target.value)
  }

  const handleSelectChange2=(e)=>{
    setSelectedOption2(e.target.value)
  }

  const handleCoSelectChange1=(e)=>{
    setCoSelectedOption1(e.target.value)
  }

  const handleCoSelectChange2=(e)=>{
    setCoSelectedOption2(e.target.value)
  }

  //handler for character section to update the redux states
  const handler=()=>{
    if(selectedOption1 === 'Name' && selectedOption2 === 'Ascending')
    {
      dispatch(changeFn({...reduxData,name:true,date:false,asc:true,dsc:false}))
    }
    else if(selectedOption1 === 'Name' && selectedOption2 === 'Descending')
    {
      dispatch(changeFn({...reduxData,name:true,date:false,asc:false,dsc:true}))
    }
    else if(selectedOption1 === 'Date Modified' && selectedOption2 === 'Ascending'){
      dispatch(changeFn({...reduxData,name:false,date:true,asc:true,dsc:false}))
    }
    else{
      dispatch(changeFn({...reduxData,name:false,date:true,asc:false,dsc:true}))
    }
  }

  //handler for comics section to update the redux states
  const handler2=()=>{
    console.log(coSelectedOption1,coSelectedOption2)
    if(coSelectedOption1==='Date Modified' && coSelectedOption2==='Ascending')
    {
      dispatch(changeFn({...reduxData,coDate:true, coFocDate:false, coOSD:false, coIN:false, coAsc:true,coDsc:false}))
    }
    else if(coSelectedOption1==='Date Modified' && coSelectedOption2==='Descending'){
      dispatch(changeFn({...reduxData,coDate:true, coFocDate:false, coOSD:false, coIN:false, coAsc:false,coDsc:true}))
    }

    else if(coSelectedOption1==='FOC Date' && coSelectedOption2==='Ascending'){
      dispatch(changeFn({...reduxData,coDate:false, coFocDate:true, coOSD:false, coIN:false, coAsc:true,coDsc:false}))
    }
    else if(coSelectedOption1==='FOC Date' && coSelectedOption2==='Descending'){
      dispatch(changeFn({...reduxData,coDate:false, coFocDate:true, coOSD:false, coIN:false, coAsc:false,coDsc:true}))
    }

    else if(coSelectedOption1==='On Sale Date' && coSelectedOption2==='Ascending'){
      dispatch(changeFn({...reduxData,coDate:false, coFocDate:false, coOSD:true, coIN:false, coAsc:true,coDsc:false}))
    }
    else if(coSelectedOption1==='On Sale Date' && coSelectedOption2==='Descending'){
      dispatch(changeFn({...reduxData,coDate:false, coFocDate:false, coOSD:true, coIN:false, coAsc:false,coDsc:true}))
    }

    else if(coSelectedOption1==='Issue Number' && coSelectedOption2==='Ascending'){
      dispatch(changeFn({...reduxData,coDate:false, coFocDate:false, coOSD:false, coIN:true, coAsc:true,coDsc:false}))
    }
    else if(coSelectedOption1==='Issue Number' && coSelectedOption2==='Descending'){
      dispatch(changeFn({...reduxData,coDate:false, coFocDate:false, coOSD:false, coIN:true, coAsc:false,coDsc:true}))
    }
  }

  //updating search variable (searchBtn) inorder invoke search component
  const searchHandler=()=>{
    dispatch(changeFn({comicsBtn:false,charBtn:false, searchVal:search,home:false,searchBtn:true}))
    setSearch('')
    
  }
//getting search input data
  const inputHandler=(event)=>{
    setSearch(event.target.value)
  }

  let content 
  //conditional rendering for setting the content
  //for comic section
  if(reduxData.comicsBtn){
    content =<div className='containerNav2'>
    <nav>
      <span className='span'>
        <h2>Sort By</h2>
    <select  onChange={handleCoSelectChange1}> 
      <option value="Date Modified">Date Modified</option> 
      <option value="FOC Date">FOC Date</option>
      <option value="On Sale Date">On Sale Date</option> 
      <option value="Issue Number">Issue Number</option>
  </select>

  <select  onChange={handleCoSelectChange2}> 
      <option value="Ascending">Ascending</option> 
      <option value="Descending">Descending</option> 
  </select>

  <button onClick={handler2}> Submit</button>
  
  </span>
    </nav>
     
  </div>
  }

  //for character or search section
  else if(reduxData.charBtn ||reduxData.searchBtn){
    content=<div className='containerNav2'>
    <nav>
      <span>

    {    reduxData.searchBtn ? null :
        <div>
        <h2>Sort By</h2>
    <select className='dropdown' onChange={handleSelectChange1}> 
      <option value="Name">Name</option> 
      <option value="Date Modified">Date Modified</option> 
  </select>

  <select name="dog-names" id="dog-names" onChange={handleSelectChange2}> 
      <option value="Ascending">Ascending</option> 
      <option value="Descending">Descending</option> 
  </select>

  <button className='searchBtn' onClick={handler}> Submit</button>

  </div>
  }
  <input className='input' type='text' value={search} onChange={inputHandler} placeholder='Search'/>
      <Link to='/search'>
      <button onClick={searchHandler}   className='input-btn' type='submit'>Search</button>
      </Link>
  </span>
    </nav>
  </div>
  }
  
  return (
    <div>
   { 
    content
  }
  </div>
  )
}
export default NavBar2
