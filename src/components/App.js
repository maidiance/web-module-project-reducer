import React, { useReducer } from 'react';

import './App.css';

import reducer, { initialState } from '../reducers/index';
import { applyOperator, applyNumber } from '../actions/index';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleNumber = (number) => {
    dispatch(applyNumber(number));
  }
  const handleOperator = (operator) => {
    dispatch(applyOperator(operator));
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onclick={() => handleNumber(1)} />
              <CalcButton value={2} onclick={() => handleNumber(2)}/>
              <CalcButton value={3} onclick={() => handleNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onclick={() => handleNumber(4)}/>
              <CalcButton value={5} onclick={() => handleNumber(5)}/>
              <CalcButton value={6} onclick={() => handleNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onclick={() => handleNumber(7)}/>
              <CalcButton value={8} onclick={() => handleNumber(8)}/>
              <CalcButton value={9} onclick={() => handleNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onclick={() => handleOperator('+')}/>
              <CalcButton value={"*"} onclick={() => handleOperator('*')}/>
              <CalcButton value={"-"} onclick={() => handleOperator('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
