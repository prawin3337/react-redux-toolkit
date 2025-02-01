import { useSelector, useDispatch } from 'react-redux';
import { increament, decreament, reset, increamentByAmt } from './counterSlice';
import { useState } from 'react';

const Counter = () => {
    // state came from store.
    const count  = useSelector((state: any) => state.counter.count);
    const dispatch = useDispatch();
    const [amt, setAmt] = useState(0);
  return (
    <section>
        <label>AMT:</label>
        <input type='number' onChange={(e) => { setAmt(Number(e.target.value))}}/>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increament())}>+</button>
            <button onClick={() => dispatch(decreament())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increamentByAmt(amt))}>Increament By AMT</button>
        </div>
    </section>
  )
}

export default Counter