import React,{useEffect} from 'react';

import {useDispatch,useSelector} from 'react-redux';
import { initGame } from './reduxStore/actions/game.action'
import Game from './clickerGame';
import './App.css';
import { Loading } from './clickerGame/components/loader';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.businessGame.loading);
  const error = useSelector((state) => state.businessGame.error);

  useEffect(() => {
    console.log("useEffect")
    dispatch(initGame());
  }, [dispatch]);

  return (
    <div className="App">
     
        <div className="gameContainer">
          
     
        
        {
          !loading && !error && <Game />
        }
        
        {loading &&  <Loading/>}
        
        </div>
         
      
    </div>
  );
}

export default App;
