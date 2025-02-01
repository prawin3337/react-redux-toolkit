import { useSelector, useDispatch } from 'react-redux';
import { increament, decreament } from './counterSlice';

const Counter = () => {
    const count  = useSelector((state: any) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increament())}>+</button>
            <button onClick={() => dispatch(decreament())}>-</button>
        </div>
    </section>
  )
}

export default Counter