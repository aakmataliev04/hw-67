import React from 'react';
import './Intercom.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {addSymbol, checkPinCode, deleteSymbol, resetValue} from './intercomSlice';

const Intercom = () => {
  const intercomHiddenValue = useSelector<RootState>((state) => state.intercom.hiddenValue);
  const dispatch = useDispatch();
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
    <div className="intercom">
      <div className="display" id="display">{intercomHiddenValue}</div>
      <div className="buttons">
        <button className="button" onClick={() => dispatch(addSymbol('1'))}>1</button>
        <button className="button" onClick={() => dispatch(addSymbol('2'))}>2</button>
        <button className="button" onClick={() => dispatch(addSymbol('3'))}>3</button>
        <button className="button" onClick={() => dispatch(addSymbol('4'))}>4</button>
        <button className="button" onClick={() => dispatch(addSymbol('5'))}>5</button>
        <button className="button" onClick={() => dispatch(addSymbol('6'))}>6</button>
        <button className="button" onClick={() => dispatch(addSymbol('7'))}>7</button>
        <button className="button" onClick={() => dispatch(addSymbol('8'))}>8</button>
        <button className="button" onClick={() => dispatch(addSymbol('9'))}>9</button>
        <button className="button special" id="delete" onClick={() => dispatch(deleteSymbol())}>&lt;</button>
        <button className="button" onClick={() => dispatch(addSymbol('0'))}>0</button>
        <button className="button confirm" id="confirm" onClick={() => dispatch(checkPinCode())}>E</button>
      </div>
    </div>
    <button className="button special" id="delete" onClick={() => dispatch(resetValue())}>Reset</button>
    </div>
  );
};

export default Intercom;