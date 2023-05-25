import './App.css';
import React, {useEffect} from 'react';
import Aos from 'aos';

import Layout from './Layout';



function App() {

  useEffect(()=> {
    Aos.init()
  }, []);
  
  return (
    <>
      <Layout/>
         
    </>
  );
}

export default App;
