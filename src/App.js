import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
import Project1 from './Project/Project1'
import ApiCall from './Project/ApiCall';

const App =() => {
  const [num, setNum] =useState(0);
  const handclick =() =>{
    setNum(num+1);
    
  }
  return (
    <div>
  <Project1/>
  {/* <ApiCall/> */}

 
  </div>
 
  );
}

export default App;
