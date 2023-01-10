import { useSelector, useDispatch } from 'react-redux/es/exports';
import { increment, decrement, incrementByUser } from './Pages/counterSlice';
import './App.css';

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleByUser = () => {
    dispatch(incrementByUser(5))
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment +1</button>
      <button onClick={handleDecrement}>decrement -1</button>
      <button onClick={handleByUser}>increment by User</button>
    </div>
  );
}

export default App;
