import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import NavBar2 from './NavBar2/NavBar2';
import { useSelector} from 'react-redux/es/hooks/useSelector';
function App() {
  //extracting values from the redux store
  const reduxData=useSelector((state)=> state.navBtn.value)
  let content=null;
  
  if(reduxData.comicsBtn || reduxData.charBtn || reduxData.searchBtn){
    content=<NavBar2/>
  }
  else{
    content=null
  }
  return (
    <div className='App'> 
      <NavBar/>
      {content}
      <Home/> 
    </div>
 
  );
}

export default App;
