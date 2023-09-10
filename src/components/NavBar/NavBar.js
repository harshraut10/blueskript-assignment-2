
import './NavBar.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux'
import { changeFn } from '../../ReduxStore/Redux';
import { Link } from 'react-router-dom';
const NavBar = () => {

  const btn_val=useSelector((state)=> state.navBtn.value)
  const dispatch=useDispatch();
  return (
    <div className='containerNav'>
      <nav>
      <span>
        <Link to='/'>
      <button className={`button ${btn_val.home ? 'clicked' : ''}`}  onClick={()=>{
      dispatch(changeFn({comicsBtn:false,charBtn:false,home:true}))

}}>Home</button></Link>


       <Link to='/comics'> <button className={`button ${btn_val.comicsBtn  ? 'clicked' : ''}`}  onClick={()=>{
          dispatch(changeFn({comicsBtn:true,charBtn:false,home:false}))
     }}>Comics</button></Link>

        <Link to='/characters'>
        <button className={`button ${btn_val.charBtn || btn_val.searchBtn ? 'clicked' : ''}`}  onClick={()=>{
      dispatch(changeFn({comicsBtn:false,charBtn:true,home:false}))

     }}>Characters</button></Link>
      </span>
      </nav>
    </div>
  )
}

export default NavBar
