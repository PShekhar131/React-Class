import React, {useState} from 'react';
import './App.css';
// import ClassComponent from './components/ClassComponent';
// import FunctionalComponent from './components/FunctionComponent';
import DisplayCard from './components/DispayCard';
import AllCard from './components/AllCard';

function App() {

  const [name, setName] = useState('Component');

  return (
    <>

    <h1>This is React App</h1>
    {/* <ClassComponent />
    <FunctionalComponent comp={name} />

    {/* <DisplayCard /> 
    <AllCard/> */}
        
    </>
  )
}

export default App
