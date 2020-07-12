import React,{useEffect} from 'react';

import {useDispatch} from 'react-redux';
import { initGame } from './reduxStore/actions/shops.action'
import Game from './clickerGame';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect")
    dispatch(initGame());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        
        <Game/>
       
         
      </header>
    </div>
  );
}

export default App;
