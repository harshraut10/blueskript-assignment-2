import React, { useState } from 'react'
import './NavBar2.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux'
import { changeFn } from '../ReduxStore/Redux';

const NavBar2 = () => {
  const reduxData=useSelector((state)=> state.navBtn.value)
  const dispatch=useDispatch();

  const [selectedOption1, setSelectedOption1]=useState('Name')
  const [selectedOption2, setSelectedOption2]=useState('Ascending')

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

  //For character section
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

  //for comic section
  //
  //dispatch(changeFn({...reduxData,coDate:false, coFocDate:false, coOSD:false, coIN:false, coAsc:false,coDsc:false}))
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


    console.log(coSelectedOption1,coSelectedOption2)
  }
  return (
    <div>
   { 
    reduxData.comicsBtn ?  
    
    <div className='containerNav'>
      <nav>
        <span>
          <h2>Sort By</h2>
      <select name="dog-names" id="dog-names" onChange={handleCoSelectChange1}> 
        <option value="Date Modified">Date Modified</option> 
        <option value="FOC Date">FOC Date</option>
        <option value="On Sale Date">On Sale Date</option> 
        <option value="Issue Number">Issue Number</option>
    </select>

    <select name="dog-names" id="dog-names" onChange={handleCoSelectChange2}> 
        <option value="Ascending">Ascending</option> 
        <option value="Descending">Descending</option> 
    </select>

    <button onClick={handler2}> Submit</button>
    
    </span>
      </nav>
       
    </div>
    
    
    
    
    
    
    : <div className='containerNav'>
      <nav>
        <span>
          <h2>Sort By</h2>
      <select name="dog-names" id="dog-names" onChange={handleSelectChange1}> 
        <option value="Name">Name</option> 
        <option value="Date Modified">Date Modified</option> 
    </select>

    <select name="dog-names" id="dog-names" onChange={handleSelectChange2}> 
        <option value="Ascending">Ascending</option> 
        <option value="Descending">Descending</option> 
    </select>

    <button onClick={handler}> Submit</button>
    
    </span>
      </nav>
       
    </div>
  }
  </div>
  )
}

export default NavBar2
