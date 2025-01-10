import { useSelector, useDispatch} from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/slices/counterSlice";

export default function Counter() {
    const count = useSelector( (state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            {/*<button onClick={() => dispatch(incrementCount())}>Increment</button>
            <button onClick={() => dispatch(decrementCount())}>Decrement</button>*/}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
        </div>
    )
}