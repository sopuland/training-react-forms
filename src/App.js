import React from 'react';
import './App.css';
import Form from './Form';
import FormEud from './FormEud';
import CompoTestBootstrap from './CompoTestBootstrap';

function App() {
  return ( 
    <div className="App">
      <Form />
      <hr />
      <hr />
      <FormEud head={false} />
      <CompoTestBootstrap /> 
    </div>
  )
}

export default App;
