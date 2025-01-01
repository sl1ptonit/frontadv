import { useSelector, useDispatch} from "react-redux";
import {incrementCount, decrementCount} from "../store/actions/actions";

export default function Counter() {
    const count = useSelector( (state) => state.count);
    console.log(count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(incrementCount())}>Increment</button>
            <button onClick={() => dispatch(decrementCount())}>Decrement</button>
        </div>
    )
}