import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const View = (props) => {
    const data=useSelector((state)=> state.navBtn.value)
    console.log(data)
  return (
    <div>
      {
      data.comicsBtn ? data.viewData.map((itr)=>(
            <div className='iterator'>
            <h1>{itr.title}</h1>
            <img className='poster' src={`${itr.thumbnail.path}.jpg`} alt=''/>
            <h2>Description: {itr.description}</h2>
            <h2>Page Count: {itr.pageCount}</h2>
            <h2>ISBN: {itr.isbn}</h2>
            <h2>Issue No. {itr.issueNumber}</h2>
            </div>
             )) : 

             data.viewData.map((itr)=>(
             <div className='iterator'>
            <h1>{itr.name}</h1>
            <img className='poster' src={`${itr.thumbnail.path}.jpg`} alt=''/>
            <h2>Description: {itr.description}</h2>
            <h2>Stories Count: {itr.stories.available}</h2>
            <h2>Comics Count: {itr.comics.available}</h2>
            </div>))
            }
      
    </div>
  )
}

export default View
